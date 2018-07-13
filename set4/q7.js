function checkSpeed(){
	let input = parseInt(document.querySelector("input").value);
	if(input> 60){
		console.log("OVERSPEEDING")
	}else{
		console.log("NOT")
	}
}