// ==== To-Do App ====
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = '';
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => deleteTask(i);
    taskList.appendChild(li);
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (!task) return;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = '';
  loadTasks();
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

if (taskList) loadTasks();


// ==== Product Listing ====
const allProducts = [
  { name: "Smartphone", category: "tech", rating: 4.5, price: 299 },
  { name: "Vacuum Cleaner", category: "home", rating: 4.0, price: 150 },
  { name: "Laptop", category: "tech", rating: 4.8, price: 999 },
  { name: "Coffee Maker", category: "home", rating: 3.9, price: 80 }
];

function filterProducts() {
  const cat = document.getElementById("categoryFilter").value;
  let filtered = cat === "all" ? allProducts : allProducts.filter(p => p.category === cat);
  displayProducts(filtered);
}

function sortProducts() {
  const sortBy = document.getElementById("sortOption").value;
  let sorted = [...allProducts];

  if (sortBy === "price") {
    sorted.sort((a, b) => a.price - b.price);
  } else {
    sorted.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(sorted);
}

function displayProducts(products) {
  const container = document.getElementById("productList");
  if (!container) return;
  container.innerHTML = "";
  products.forEach(p => {
    container.innerHTML += `
      <div>
        <strong>${p.name}</strong><br/>
        Category: ${p.category}<br/>
        Rating: ${p.rating} ⭐<br/>
        Price: $${p.price}
      </div>`;
  });
}

if (document.getElementById("productList")) {
  filterProducts(); // Load default products
}
