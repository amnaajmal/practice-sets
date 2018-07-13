let highScore = 200;
let myScore =200;
let scoreDiff= highScore -myScore;
if(myScore>highScore){
	console.log("Congratulations!! Your new high score is ,"+ myScore);
}else{
	console.log("Try Again. You just need "+ scoreDiff +" to win!");
}