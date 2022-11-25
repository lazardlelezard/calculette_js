
//variables
var monInput = document.getElementsByTagName('input');
console.log(monInput);
var mesDiv = document.getElementsByTagName('div');
console.log(mesDiv);

var i = 0;

//evenment
monInput[0].addEventListener('change' , fonction1);


//fonction 
function fonction1(){

	console.log('change!');
	console.log(monInput[0].value);

	mesDiv[i].style.backgroundColor = monInput[0].value;
	i++;

	if(i >= mesDiv.length) {
		i = 0;
	}
}