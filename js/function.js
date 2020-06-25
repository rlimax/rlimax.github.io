function atual(){
	let data = new Date();
	let msg = "";
	hora = data.getHours();
	min = data.getMinutes();
	seg = data.getSeconds();
	if(hora>=18 || hora<6){
		msg = "&#9790;&nbsp;&nbsp;"; //lua
	}else{
		msg = "&#9728;&nbsp;&nbsp;"; //sol
	}
	if(hora<=9){
		hora = "0"+hora;
	}
	if(min<=9){
		min = "0"+min;
	}
	if(seg<=9){
		seg = "0"+seg;
	}
	document.getElementById('hora').innerHTML = "<span class=\"tim\">"+msg+"</span>"+hora+":"+min+":"+seg;
}