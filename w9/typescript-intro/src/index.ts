import { pizzaManager, generateRandomPizza } from "./pizzaManager";

pizzaManager.addPizza(generateRandomPizza());
pizzaManager.addPizza(generateRandomPizza());
pizzaManager.addPizza(generateRandomPizza());

console.log(pizzaManager.getPizza(1));
console.log(pizzaManager.getHotPizzas());

// sort for the dates
setTimeout(() => {
  pizzaManager.addPizza(generateRandomPizza());
  console.log(pizzaManager.getMenu());
  console.log(pizzaManager.sortPizzas("addedOn", "asc"));
}, 5000);
