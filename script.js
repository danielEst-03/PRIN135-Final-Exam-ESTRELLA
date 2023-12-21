document.addEventListener("DOMContentLoaded", function () {
    // Sample data structure to store to-do items
    let todoItems = [];
    let processedItems = [];
  
    // Function to render to-do items
    function renderTodoItems() {
      const todoContainer = document.getElementById("todoContainer");
      todoContainer.innerHTML = "";
  
      todoItems.forEach((item, index) => {
        const card = createCard(item, index);
        todoContainer.appendChild(card);
      });
    }
  
    // Function to render done items
    function renderDoneItems() {
      const doneContainer = document.getElementById("doneContainer");
      doneContainer.innerHTML = "";
  
      processedItems.forEach((item) => {
        const card = createCard(item);
        doneContainer.appendChild(card);
      });
    }
  
    function createCard(item, index) {
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.details}</p>
          </div>
        </div>
      `;
      return card;
    }

    function processOrdersFIFO() {
      console.log("Processing orders via First In First Out:");
      while (todoItems.length > 0) {
        const currentOrder = todoItems.shift();
        console.log("Processing Order:", currentOrder);
        processedItems.push(currentOrder);
      }
      console.log("Orders Complete...");
  
      // Update the UI after processing
      renderTodoItems();
      renderDoneItems();
    }
  
    // Function to process orders using Last In First Out approach
    function processOrdersLIFO() {
      console.log("Processing orders via Last In First Out:");
      while (todoItems.length > 0) {
        const currentOrder = todoItems.pop();
        console.log("Processing Order:", currentOrder);
        processedItems.push(currentOrder);
      }
      console.log("Orders Complete...");
  
      // Update the UI after processing
      renderTodoItems();
      renderDoneItems();
    }
  
    // Event listener for the "Add" button
    document.getElementById("btnAdd").addEventListener("click", function () {
      const title = document.getElementById("txtTitle").value;
      const details = document.getElementById("txtDetails").value;
  
      // Add the to-do item to the array
      todoItems.push({ title, details });
  
      // Update the UI
      renderTodoItems();
    });
  
    // Event listener for the "First In First Out" button
    document.getElementById("btnFIFO").addEventListener("click", function () {
      processOrdersFIFO();
    });
  
    // Event listener for the "Last In First Out" button
    document.getElementById("btnFILO").addEventListener("click", function () {
      processOrdersLIFO();
    });
  
    // Event listener for the "Reset" button
    document.getElementById("btnReset").addEventListener("click", function () {
      // Clear both arrays and update the UI
      todoItems = [];
      processedItems = [];
      renderTodoItems();
      renderDoneItems();
    });
  
    // Event listener for the "Process" buttons within cards
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("btn-process")) {
        const index = event.target.dataset.index;
        processOrdersFIFO(); // You can change this to "LIFO" if needed
      }
    });
  });
  