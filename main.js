/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    console.log("Button 1 was clicked"); 
    const rand = Math.random();
    const randomNumDiv = document.getElementById("random_num");
    randomNumDiv.innerHTML = rand;
}

function button2Clicked() {
  console.log("Button 2 was clicked"); 
  const rand = Math.random();
  const circle = document.getElementById("circle");
  const oldColor = circle.style.fill || "blue";
  const newColor = oldColor === "blue" ? "green" : "blue";
  circle.style.fill = newColor;
}