$ (document).ready(function(){

	console.log("Homer");
		$("#Homer").click(function(){
			console.log("Homer");
			$("#Homer").appendTo(".yourCharacter");
			$("#Marge").appendTo(".enemAvail");
			$("#Peter").appendTo(".enemAvail");
			$("#Louis").appendTo(".enemAvail");
		});

		console.log("Marge");
		$("#Marge").click(function(){
			console.log("Marge");
			$("#Marge").appendTo(".yourCharacter");
			$("#Homer").appendTo(".enemAvail");
			$("#Peter").appendTo(".enemAvail");
			$("#Louis").appendTo(".enemAvail");
		})

		console.log("Louis");
		$("#Louis").click(function(){
			console.log("Louis");
			$("#Louis").appendTo(".yourCharacter");
			$("#Marge").appendTo(".enemAvail");
			$("#Peter").appendTo(".enemAvail");
			$("#Homer").appendTo(".enemAvail");
		})

		console.log("Peter");
		$("#Peter").click(function(){
			console.log("Peter");
			$("#Peter").appendTo(".yourCharacter");
			$("#Marge").appendTo(".enemAvail");
			$("#Homer").appendTo(".enemAvail");
			$("#Louis").appendTo(".enemAvail");
		})


		

});







	


// ids in html use #s, and classes uses .s//
























