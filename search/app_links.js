setInterval(function Serch() {
	var x =document.getElementById('serch-text').value;
	var y1 = document.getElementById('test1');
	var y2 = document.getElementById('test2');
	var y3 = document.getElementById('test3');
	var y4 = document.getElementById('test4');
	


	if (x=="Bazooka" || x== "bazooka" ) {
		y1.innerHTML = x;
		y2.innerHTML = x + " -Libertatea-i fantezie" ;
		y3.innerHTML = x + " -De dragul prezentului";
		y4.innerHTML = x + " -Casa dan deal";

	}else if(x != "Bazooka" ){
		y1.innerHTML = x;
		y2.innerHTML = ""
		y3.innerHTML = ""
		y4.innerHTML = ""
	}
	
	if (x =="Jacob"|| x=="jacob") {
		y1.innerHTML = x;
		y2.innerHTML = x + " Lee -Demons" ;
		y3.innerHTML = x + " Lee - Lee - I Belong to You";
		y4.innerHTML = x + " Banks - Chainsmoking";
	}
	else if (x !="Jacob"){
		y1.innerHTML = x;
		y2.innerHTML = ""
		y3.innerHTML = ""
		y4.innerHTML = ""
	}


	
}
,1500)



