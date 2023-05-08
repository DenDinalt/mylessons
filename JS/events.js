let counter = 0;


function onClickButton(el) {
counter++;
el.innerHTML = "You pushed on button:" + counter;
el.style.background = "green";
el.style.color = "blue";

 }


 function onMouseOver(el) {
    console.log(el.value);
 }