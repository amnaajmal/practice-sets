let noOfApple =22;
let noOfMangoes=3;
let noOfBananas=22;
let costOfApple =10;
let costOfMango=15;
let costOfBanana=8;
let totalCost= noOfApple*costOfApple + noOfMangoes*costOfMango+noOfBananas+costOfBanana;
let aliRs= 100;
if(totalCost > aliRs){
	console.log("Shopping FAILED! Not enough money")
}else{
	console.log("Shopping SUCCESS!!")
}