var jasonThings = [
"Mention Pokemon Go", 
"Talk about anime",
"Be socially awk",
"Ref an old meme",
"Mention bad luck",
"Curse the jews",
"Wakanda forever!",
"Make racist jokes",
"Use the wrong word",
"Forget the song title",
"Be submissive",
"That's bs",
"Suggest 'bad' anime",
"Get pissed off from work",
"Give compliment",
"Easily impressed",
"Show dog pic",
"Suggest manga",
"Show splatoon replay",
"Ignore a call",
"Complain about Elaine",
"Mention cookies or sweets",
"Mention PC",
"Get mad at vidya gams"];

function scrambleArray(arr){

	for(var a = 0; a < arr.length * 3; a++){
		var randomIndex1 = Math.floor(Math.random() * arr.length);
		var randomIndex2 = Math.floor(Math.random() * arr.length);
		var tempValue = arr[randomIndex1];
		arr[randomIndex1] = arr[randomIndex2];
		arr[randomIndex2] = tempValue;
	}
	
	return arr;
}

function fillBoxes(answers){
	$(".box").each(function(){
		if(!$(this).hasClass("b13")){
			$(this).html(answers[0]);
			answers.shift();
		}
	});
};

$(".box").on("click", function(){
	$(this).toggleClass("selected");
})

fillBoxes(scrambleArray(jasonThings));
