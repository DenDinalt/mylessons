
function checkForm(el) {
    let number1 = el.number1.value;//document.getElementById('number1').value;

    let number2 = el.number2.value;//document.getElementById('number2').value;


   let num1 = Number.parseInt(number1);
   let num2 = Number.parseInt(number2);

    sum1 = num1 + num2;

    document.getElementById('sum').innerText = sum1

    //let sum = document.getElementById('sum').value;
console.log(number1);
console.log(number2);
console.log(sum1);


return false;

}

// let f = 3
// let s = 4
 
// summa = f + s
// console.log(summa)