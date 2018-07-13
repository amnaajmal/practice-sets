let numb1;
let numb2;
function setValues() {
    numb1 = parseInt(document.querySelector("#numb1").value);
    numb2 = parseInt(document.querySelector("#numb2").value);
}
function add() {
   setValues();
   alert (numb1 + numb2);
}
function subtract() {
    setValues();
    alert (numb1 - numb2);
}
function multiply() {
    setValues();
    alert(numb1 * numb2);
}
function divide() {
    setValues();
   alert (numb1 / numb2);
}
function remainder() {
    setValues();
    alert(numb1 % numb2);
}
