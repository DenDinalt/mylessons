let letter = document.getElementById('letter');
letter.title = "frog" 
console.log(letter.title);


letter.style.color = "green";
letter.style.backgroundColor = "yellow";

letter.innerHTML = "Let<br>Go";

//document.getElementById('letter').style.color = "white";

//let spans = document.getElementsByTagName('span');

let spans = document.getElementsByClassName('simple-text');

for(let i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}