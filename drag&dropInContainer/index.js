const container = document.getElementById("container");

let offsetX, offsetY; //mkniki heravorutyuny div dzax ev verevi pateric
const myDivs = document.querySelectorAll(".myDiv");

myDivs.forEach((myDiv) => {
  myDiv.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - myDiv.getBoundingClientRect().left;
    offsetY = e.clientY - myDiv.getBoundingClientRect().top;

    console.log("offX, offy", offsetX, offsetY);

    document.addEventListener("mousemove", moveElement);
    document.addEventListener("mouseup", dropElement);
    myDiv.style.cursor = "grabbing";
  });
});
//const myDiv = document.getElementById("myDiv");
//let offsetX, offsetY;
//mkniki heravorutyuny div dzax ev verevi pateric

// myDiv.addEventListener("mousedown", (e) => {
//   offsetX = e.clientX - myDiv.getBoundingClientRect().left;
//   offsetY = e.clientY - myDiv.getBoundingClientRect().top;

//   console.log("offX, offy", offsetX, offsetY);

//   document.addEventListener("mousemove", moveElement);
//   document.addEventListener("mouseup", dropElement);
//   myDiv.style.cursor = "grabbing";
// });

function moveElement(e) {
  let newX = e.clientX - offsetX; //containeri u divi dzax pateri mijev heravorutyuny
  let newY = e.clientY - offsetY; //containeri u divi  verevi pateri mijev heravorutyuny

  const containerRect = container.getBoundingClientRect();
  const myDivRect = e.target.getBoundingClientRect();

  if (newX < containerRect.left) {
    newX = containerRect.left;
  } else if (newX + myDivRect.width > containerRect.right) {
    newX = containerRect.right - myDivRect.width;
  }

  if (newY < containerRect.top) {
    newY = containerRect.top;
  } else if (newY + myDivRect.height > containerRect.bottom) {
    newY = containerRect.bottom - myDivRect.height;
  }
  //myDiv.style.left = `${newX - containerRect.left}px`;
  //myDiv.style.top = `${newY - containerRect.top}px`;
  e.target.style.left = `${newX - containerRect.left}px`;
  console.log(`${newX - containerRect.left}px`);
  e.target.style.top = `${newY - containerRect.top}px`;

  console.log("drop", { newX, newY });
}

function dropElement() {
  document.removeEventListener("mousemove", moveElement);
  document.removeEventListener("mouseup", dropElement);

  console.log("end");
}
