import "./styles.css";
import Picture from "./hedgehoginsocks.jpg";
import printMe from "./print.js";

if (module.hot) {
  //toy with tomorrow: module.hot isn't evaluating to true yet
  module.hot.accept("./print.js", function() {
    console.log("acceping updated module");
    document.body.removeChild(element);
    element = doSomething();
    document.body.appendChild(element);
  });
}

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

  head.appendChild(btn);

  return head;
}
let element = doSomething();
document.body.appendChild(element);
