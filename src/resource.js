"use strict";

function resourceLoad() {
  //after initial page load, fetch other resources

  console.log("loading...");
  setTimeout(notify, 3000);

  function notify() {
    document.scrolled = true;
    console.log("Done!");
  }
}

export default resourceLoad;
