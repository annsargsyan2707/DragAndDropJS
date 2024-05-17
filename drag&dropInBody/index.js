const myDiv = document.getElementById("myDiv");

let offsetX, offsetY;

myDiv.addEventListener("mousedown", (e) => {
  offsetX = e.clientX - myDiv.getBoundingClientRect().left;
  offsetY = e.clientY - myDiv.getBoundingClientRect().top;
  document.addEventListener("mousemove", moveElement);
  document.addEventListener("mouseup", dropElement);
  myDiv.style.cursor = "grabbing";
});

function moveElement(e) {
  myDiv.style.left = `${e.clientX - offsetX}px`;
  myDiv.style.top = `${e.clientY - offsetY}px`;
}

function dropElement() {
  document.removeEventListener("mousemove", moveElement);
  document.removeEventListener("mouseup", dropElement);
  myDiv.style.cursor = "grab";
}
