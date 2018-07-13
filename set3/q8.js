let userYear =2000;
if (userYear % 4===0){
if (userYear%100 ===0){
if(userYear %400 ===0){
	console.log("leap Year");

}
else{
	console.log("not leap Year")
}
}else{
	console.log("this is leap Year");

}
}

else{
	console.log("This is not leap Year");
}