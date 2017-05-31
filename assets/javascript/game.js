//This function will generate and return a random number between
// a min and max value specified when called
function GetRandomNum(min, max){
	var intRandom = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(intRandom);
	return intRandom;
}

//At start of game this function will grab a new Traget Number for the player
function SetTargetNum(){
	document.getElementById("TargetNum").innerHTML = GetRandomNum(19, 120);
}

//At start of game this function will set the random values for each crystal type
function SetCrystalValues(){
	var intCrystalValue = GetRandomNum(1,12);
	return intCrystalValue;
}

