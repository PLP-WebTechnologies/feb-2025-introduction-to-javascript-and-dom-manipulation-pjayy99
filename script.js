// script.js

// Change text content dynamically
function changeText() {
    const info = document.getElementById("info");
    info.textContent = "The text has been changed using JavaScript!";
    info.style.color = "green"; // Modify CSS style
  }
  
  // Add or remove a box
  function toggleBox() {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("dynamic-box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const newBox = document.createElement("div");
      newBox.id = "dynamic-box";
      newBox.textContent = "This box was added with JavaScript!";
      newBox.style.backgroundColor = "lightblue";
      newBox.style.padding = "10px";
      newBox.style.marginTop = "10px";
      container.appendChild(newBox);
    }
  }
  