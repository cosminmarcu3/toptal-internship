const List = new TaskList();

List.add({ name: "A Task 7" });
List.add({ name: "C Task 8", priority: 3 });
// Will print a message in the console
List.add({ name: "E Task 3", priority: 6 });
// Will print a message in the console
List.add({ name: "D Task 2" });

List.add({ name: "B Task 1" });
List.add({ name: "D Task 0" });
List.printAll();
List.getAll();
List.getById(3);
List.remove(3);
List.printAll();

List.add({ name: "FF TASK KK" });
List.tasks[1].done = true;
console.log(List.getIf((task) => task.name[0] === "A" && !task.done));
console.log(List.getIf((task) => task.name.split(" ").length > 1 && task.done));

List.sortByName();
List.printAll();

const List2 = new TaskList();

List.add({ name: "D TASK ABC" });
List.add({ name: "qwerty", priority: 4 });
