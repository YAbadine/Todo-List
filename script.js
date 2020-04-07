const list = document.querySelector("#list")
const form = document.querySelector("#form")
const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const alert = document.querySelector("#alert")
const clearBtn = document.querySelector("#clearBtn")

loadEventListeners();

// Group up eventListeners
function loadEventListeners() {
  form.addEventListener("submit", addTodo)
  list.addEventListener("click", checkItem)
  clearBtn.addEventListener("click", clearTodos)
  clearBtn.addEventListener("mouseenter", confirmBtn)
  clearBtn.addEventListener("mouseout", resetBtn)
}

// Change button content on mouseover
function confirmBtn(e) {
  clearBtn.innerHTML = "Tout supprimer ?";
}
// Change button content on mouse out
function resetBtn(e) {
  clearBtn.innerHTML = "Nouvelle liste";
}
// Listening to Clear button
function clearTodos(e) {
  const items = document.querySelectorAll(".list-item");
  items.forEach(item => {
    item.remove();
  })
  hideClearBtn();
}

// Make the Clear button appears when there's more than 1 Todo
function showClearBtn() {
  clearBtn.style.display = "inline-block"
}

// Make the Clear button disappears when there's less than 2 Todo
function hideClearBtn() {
  clearBtn.style.display = "none"
}

// Check item on click
function checkItem(e) {
  e.target.classList.toggle("checked");
  
  if(list.children.length === 1 && e.target.className === "list-item checked") {
    showClearBtn();
    }
    if(list.children.length === 1 && e.target.className !== "list-item checked") {
      hideClearBtn();
      }
}

// Alert when user submit an empty value
function showAlert() {
  alert.style.display = "block";
 
  setTimeout(() => {
    alert.style.display = "none";
  }, 2500)
}

// add the input to the ToDo list
function addTodo(e) {
  const text = input.value

  if(text === "") {
    showAlert();
  } else {
  const li = document.createElement("li")

  li.className = "list-item";
  li.textContent = text; 
  
  list.appendChild(li);

  input.value = "";

  if(list.children.length > 1) {
    showClearBtn();
    }
  }
  e.preventDefault();
}

