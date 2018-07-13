let customerBal =1000
let drawBal =5000;
let diffBal =customerBal -drawBal
if(drawBal >customerBal ){
	console.log("drawaBal FAILED! Sorry, you do not have sufficient balance.")
}else{
	console.log("Withdrawal SUCCESS! Your new balance is "+ diffBal);
}