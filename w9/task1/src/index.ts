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

interface CreatePizza {
  name: string;
  size: "s" | "m" | "l";
  crust: "thin" | "thick";
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
