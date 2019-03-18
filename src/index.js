function doSomething() {
  console.log("do something has run");
  var head = document.createElement("h2");
  var txt = document.createTextNode("hello");
  head.appendChild(txt);
  var app = document.getElementById("app").appendChild(head);
}
doSomething();
