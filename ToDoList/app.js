const addButton = document.querySelector(".button");
const todoList = document.querySelector(".todoList");
const inputValue = document.getElementById("input");
const toLocalStorage = [];
const inLocalStorage = localStorage.getItem("todoItems");
console.log(inLocalStorage);

// checkLocalStorage();

inputValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
addButton.addEventListener("click", addTodo);

function addTodo() {
  const itemContainer = document.createElement("div");
  const item = document.createElement("li");
  const deleteButton = document.createElement("button");

  item.innerHTML = inputValue.value;
  itemContainer.classList.add("itemContainer");

  toLocalStorage.push(inputValue.value);
  console.log(toLocalStorage);
  localStorage.setItem("todoItems", toLocalStorage);

  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("button");

  itemContainer.append(item, deleteButton);
  todoList.append(itemContainer);

  inputValue.value = "";

  deleteButton.addEventListener("click", () => removeTodo(itemContainer));
}

function removeTodo(div) {
  div.remove();
}

function checkLocalStorage() {
  localStorage.setItem("todoItems", toLocalStorage);
  console.log(inLocalStorage);
  if (inLocalStorage.length > 0) {
    const storedTodos = inLocalStorage.split(",");
    console.log(storedTodos);
    storedTodos.forEach((todo) => {
      const itemContainer = document.createElement("div");
      const item = document.createElement("li");
      const deleteButton = document.createElement("button");

      item.innerHTML = todo;
      itemContainer.classList.add("itemContainer");

      deleteButton.innerHTML = `<i class="fa-solid fa-trash-can trash"></i>`;
      deleteButton.classList.add("button");

      itemContainer.append(item, deleteButton);
      todoList.append(itemContainer);

      inputValue.value = "";

      deleteButton.addEventListener("click", () => removeTodo(itemContainer));
    });
  }
}
