//your JS code here. If required.

let output = document.getElementById("output");
let button = document.getElementById("btn"); 
let text = document.getElementById("text");
let delay = document.getElementById("delay");
text.value = "";
delay.value="";
output.innerText="";

button.addEventListener("click",displayMessage)

async function displayMessage(){
	await new Promise((resolve)=>setTimeout(resolve, delay.value));
	output.innerText=text.value;
}