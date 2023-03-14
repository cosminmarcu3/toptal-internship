import { faker } from "@faker-js/faker";

interface Topping {
  name: string;
  isHot: boolean;
  quantity: number;
}

enum BakingDuration {
  fast = 10,
  medium = 20,
  slow = 30,
}

type Size = "s" | "m" | "l";
type Crust = "thin" | "thick";

interface CreatePizza {
  name: string;
  size: Size;
  crust: Crust;
  toppings: Topping[];
  bakingDuration: BakingDuration;
  price: number;
}

interface Pizza extends CreatePizza {
  id: number;
  addedOn: string;
}

interface ApiResult {
  success: true;
  data: Pizza[];
}

interface ApiError {
  success: false;
  error: string;
}

type ApiResponse = ApiResult | ApiError;

const isError = (response: ApiResponse): response is ApiError => {
  return (response as ApiError).error !== undefined;
};

const menu: Pizza[] = [];
let id = 0;

type Criterion = "name" | "size" | "price" | "bakingDuration" | "addedOn";
type Direction = "asc" | "desc";

interface PizzaManager {
  addPizza: (pizza: CreatePizza) => void;
  getPizza: (id: number) => Pizza;
  getHotPizzas: () => Pizza[];
  sortPizzas: (criterion: Criterion, direction?: Direction) => Pizza[];
  getMenu: () => Pizza[];
}

const pizzaManager: PizzaManager = {
  addPizza: (pizza) => {
    menu.push({
      id,
      addedOn: new Date().toUTCString(),
      ...pizza,
    });

    id++;
  },
  getPizza: (id) => menu.find((pizza) => pizza.id === id),
  getHotPizzas: () =>
    menu.filter((pizza) => pizza.toppings.some((topping) => topping.isHot)),
  sortPizzas: (criterion, direction) => {
    let sortReturnValue = 1;

    if (direction === "desc") {
      sortReturnValue = -1;
    }

    const sort = (a: Pizza, b: Pizza) => {
      if (a[criterion] < b[criterion]) {
        return -1 * sortReturnValue;
      }
      if (a[criterion] > b[criterion]) {
        return sortReturnValue;
      }

      return 0;
    };

    const shallowMenu: Pizza[] = JSON.parse(JSON.stringify(menu));

    return shallowMenu.sort(sort);
  },
  getMenu: () => menu,
};

const randomNumber = (min: number, max: number) =>
  faker.datatype.number({ min, max });

const getRandomItem = (array: string[]) =>
  array[randomNumber(0, array.length - 1)];

const generateRandomTopping = () => ({
  name: faker.name.firstName(),
  isHot: Boolean(randomNumber(0, 1)),
  quantity: randomNumber(1, 9),
});

const generateRandomPizza = (): CreatePizza => {
  const toppingsPlaceholder = Array.from({ length: randomNumber(1, 5) });

  return {
    name: faker.name.firstName(),
    size: getRandomItem(["s", "m", "l"]) as Size,
    crust: getRandomItem(["thin", "thick"]) as Crust,
    toppings: toppingsPlaceholder.map(() => generateRandomTopping()),
    bakingDuration: randomNumber(1, 3) * 10,
    price: randomNumber(12, 45),
  };
};

export { generateRandomPizza, pizzaManager };
