var height = 0;
var width = 0;
var color = "#000000";

$("#input_height").on("input", function() {
  height = $("#input_height").val();
});

$("#input_width").on("input", function() {
  width = $("#input_width").val();
});

$("#colorPicker").on("input", function() {
  color = $("#colorPicker").val();
});



$("form").submit(function() {
  makeGrid();
});





function makeGrid() {
  var tableItem;
  tableItem = $("#pixel_canvas");

  for (var i = 0; i < height; i++) {
    tableItem.append("<tr class='table-row'></tr>");
  }

  var tableData = "<td class='table-data'></td>".repeat(width);

  $('.table-row').append(tableData);
colorElements();

};

function colorElements() {
var selectTableData = $('#pixel_canvas').find('td');
$( selectTableData ).mouseover(function() {

 $( this  ).css( "background-color", color );
});
}
