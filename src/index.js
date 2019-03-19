import "./styles.css";
import Picture from "./hedgehoginsocks.jpg";
import printMe from "./print.js";

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

  //create a button that prints from a different bundle
  var btn = document.createElement("button");
  btn.innerHTML = "check console";
  btn.onclick = printMe;

  document.body.appendChild(btn);

  var app = document.body.appendChild(head);
}
doSomething();
