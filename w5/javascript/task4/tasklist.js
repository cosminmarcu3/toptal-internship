class TaskList {
  tasks = [];
  done = false;
  #idCounter = 0;
  add(task) {
    if (this.tasks.some((t) => t.name === task.name)) {
      console.log("The task already exists");
    } else {
      if (task.priority < 1 || task.priority > 5) {
        console.log("The priority must be an integer from 1 to 5");
      } else {
        this.tasks.push({
          ...task,
          priority: task.priority || 1,
          id: this.#idCounter,
        });
        this.#idCounter++;
      }
    }
  }
  remove(id) {
    this.tasks.splice(
      this.tasks.findIndex((task) => task.id === id),
      1
    );
  }
  getAll() {
    return this.tasks;
  }
  getById(id) {
    return this.tasks.find((task) => task.id === id);
  }
  getIf(callback) {
    return this.tasks.filter(callback);
  }
  sortByName() {
    this.tasks.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  sortByPriority() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }
  printAll() {
    console.log(this.tasks);
  }
}
