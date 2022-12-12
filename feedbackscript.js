
/*
function myFunction() {
    var element = document.getElementById("uncheck");
    element.classList.toggle("star-class")
}
*/

window.onLoadActions()



function onLoadActions() {
    var y = document.getElementById("uncheck").getAttribute("class");
    if (y === "uncheck") {
      y = "check";
    } else {
      y = "uncheck";
    }
  }


/*
function changeColor() {
    uncheck.classList.toggle('red');
    star-class.classList.toggle('green');
}

 document.querySelector('uncheck').addEventListener('clicked', changeColor);
 */