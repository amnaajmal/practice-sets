let isRaining = true;
let isSnowing =true;
let isCloudy =true;
let isWindSpeed =18;

if(isRaining===true && isSnowing ===true && isCloudy ===true && isWindSpeed >15){
	console.log("FAIL!! The weather is not good for launch!")
}else{
	console.log("SUCCESS!! The weather is good for launch!")
}