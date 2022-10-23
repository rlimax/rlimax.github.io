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
let ativo;
function expande(n){
	clear();
	switch(n){
		case 1:
			if(ativo!=n){
				ativo = n;
				document.getElementById('item1').style.display="inherit";
				document.getElementById('ico1').innerHTML="&#9866;";
			}else{
				ativo = 0;
				document.getElementById('item1').style.display="none";
			}
			break;
		case 2:
			if(ativo!=n){
				ativo = n;
				document.getElementById('item2').style.display="inherit";
				document.getElementById('ico2').innerHTML="&#9866;";
			}else{
				ativo = 0;
				document.getElementById('item2').style.display="none";
			}
			break;
		case 3:
			if(ativo!=n){
				ativo = n;
				document.getElementById('item3').style.display="inherit";
				document.getElementById('ico3').innerHTML="&#9866;";
			}else{
				ativo = 0;
				document.getElementById('item3').style.display="none";
			}
			break;
		case 4:
			if(ativo!=n){
				ativo = n;
				document.getElementById('item4').style.display="inherit";
				document.getElementById('ico4').innerHTML="&#9866;";
			}else{
				ativo = 0;
				document.getElementById('item4').style.display="none";
			}
			break;
		case 5:
			if(ativo!=n){
				ativo = n;
				document.getElementById('item5').style.display="inherit";
				document.getElementById('ico5').innerHTML="&#9866;";
			}else{
				ativo = 0;
				document.getElementById('item5').style.display="none";
			}
			break;
		case 6:
			if(ativo!=n){
				ativo = n;
				document.getElementById('item6').style.display="inherit";
				document.getElementById('ico6').innerHTML="&#9866;";
			}else{
				ativo = 0;
				document.getElementById('item6').style.display="none";
			}
			break;
		case 7:
			if(ativo!=n){
				ativo = n;
				document.getElementById('item7').style.display="inherit";
				document.getElementById('ico7').innerHTML="&#9866;";
			}else{
				ativo = 0;
				document.getElementById('item7').style.display="none";
			}
			break;
	}
}
function clear(){
	document.getElementById('item1').style.display="none";
	document.getElementById('item2').style.display="none";
	document.getElementById('item3').style.display="none";
	document.getElementById('item4').style.display="none";
	document.getElementById('item5').style.display="none";
	document.getElementById('item6').style.display="none";
	document.getElementById('item7').style.display="none";

	document.getElementById('ico1').innerHTML="&#10010;";
	document.getElementById('ico2').innerHTML="&#10010;";
	document.getElementById('ico3').innerHTML="&#10010;";
	document.getElementById('ico4').innerHTML="&#10010;";
	document.getElementById('ico5').innerHTML="&#10010;";
	document.getElementById('ico6').innerHTML="&#10010;";
	document.getElementById('ico7').innerHTML="&#10010;";
}

var y = 900;
var p;
function foguete(){
	let foguete = document.getElementById('fog');

	if(y<10){
		y = 900;
		if(p==1){
			p=0;
			foguete.style.left = "160px";
		}else{
			p=1;
			foguete.style.left = "100px";
		}
	}else{
		y-=5;
	}
	foguete.style.top=y+"px";
}
function backcor(cor){
	let corpo = document.getElementsByTagName('body')[0];
	switch(cor){
		case 1:
			corpo.style.background="#eccc68";
			break;
		case 2:
			corpo.style.background= "rgb(67, 210, 229)";
			break;
		default:
			corpo.style.background= "rgb(228, 166, 204)";
			break;
	}
}
