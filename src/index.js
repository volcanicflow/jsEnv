import "./styles.css";
import Picture from "./hedgehoginsocks.jpg";

function doSomething() {
  //verify
  console.log("do something has run");

  //create a random element
  var head = document.createElement("h2");
  head.appendChild(document.createTextNode("hello, and welcome to the hedge"));
  head.classList.add("styled");

  //add image using file-loader
  var myThing = new Image();
  myThing.src = Picture;
  head.appendChild(myThing);

  return head;
}
//create a button that prints from a different bundle
var btn = document.createElement("button");

btn.innerHTML = "check console";
btn.onclick = clicky;

function clicky(e) {
  console.log("clicky");
  e.stopPropagation;
}

document.getElementById("app").appendChild(btn);
const element = doSomething();
document.body.appendChild(element);
