$(document).ready(function() {
  const colorPicker = $("#colorPicker");
  const pixels = $("#pixel_canvas");
  const color = colorPicker.val();
  
  function makeGrid(height, width) {
  
    // Loop for creating grid based on input dimensions
    for (let i = 0; i < height; i++) {
      $("<tr>").appendTo(pixels);
      
      // for (let j = 0; j < width; j++) {
      //   $("<td>").ao
      // }
    }
    
  }
  
  // When size is submitted by the user, call makeGrid()
  $("#sizePicker").submit(function(e) {
    e.preventDefault();
    
    const inputHeight = $("#input_height").val(); // number of tds
    const inputWidth = $("#input_width").val();  // number of trs
    
    
    
    
    
    makeGrid(inputHeight, inputWidth);
  });


});