const colorPicker = document.getElementById("colorPicker");
const pixels = document.getElementById("pixel_canvas");

function makeGrid(height, width) {
  // Get rid of the old grid first
  pixels.innerHTML = "";
  
  for (let i = 0; i < height; i++) {
    // Create rows based on height
    const row = document.createElement("tr");
    pixels.appendChild(row);
    
    for (let j = 0; j < width; j++) {
      // Create columns based on width and add them to the rows
      const cell = document.createElement("td");
      row.appendChild(cell);
    }
  }
}

// When size is submitted by the user, call makeGrid()
const sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const inputHeight = document.getElementById("input_height").value;
  const inputWidth = document.getElementById("input_width").value;

  makeGrid(inputHeight, inputWidth);
});

// Event listener for grid squares
pixels.addEventListener("mousedown", function(e) {
  const color = colorPicker.value;
  const clickedSquare = e.target;
  // Change background color of clicked square
  clickedSquare.style.backgroundColor = color;
});