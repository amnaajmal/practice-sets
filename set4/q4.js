  let appleCost= 10;
let bananaCost=8;
let mangoCost=15;

let noOfApple;
let noOfBanana;
let noOfMango;

function calculate(){
    let noOfApple=parseInt(document.getElementById("apple").value);
    let noOfBanana=parseInt(document.getElementById("banana").value);
    let noOfMango=parseInt(document.getElementById("mango").value);

    let total=noOfApple*appleCost + noOfBanana*bananaCost + noOfMango*mangoCost;

    alert(total);
}
