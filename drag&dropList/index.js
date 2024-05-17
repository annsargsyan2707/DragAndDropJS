document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".item");
  let columns = document.querySelectorAll(".column");

  items.forEach(function (item) {
    item.draggable = "true";
    item.addEventListener("dragstart", dragStart);
  });

  columns.forEach(function (column) {
    column.addEventListener("dragover", dragOver);
    column.addEventListener("drop", drop);
  });

  function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text/plain");
    let draggedItem = document.getElementById(data);
    if (!draggedItem) {
      console.error("Dragged item not found");
      return;
    }
    let dropTarget = event.currentTarget;

    dropTarget.appendChild(draggedItem);
  }
});
