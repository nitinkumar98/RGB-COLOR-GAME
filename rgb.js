var numsquares = 9;
var colors = [];
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset=document.querySelector("#reset"); 
var modebutton= document.querySelectorAll(".mode");
pageload();
function pageload()
{
	//mode button setup 
	setupModeButton();
	setupSquares();
    resetcolor();
}
function setupSquares()
{
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		
		if(clickedColor === pickedColor) {
			messageDisplay.textContent ="Correct";
			reset.textContent ="Play Again?";
			h1.style.background = clickedColor;
			changecolors(clickedColor);

		} else {
			this.style.background = "#232323";
			messageDisplay.textContent ="Try again!";
		}
	});
}
}
function setupModeButton()
{
	for(var i =0;i<modebutton.length;i++)
    {
	modebutton[i].addEventListener("click",function()
	{
		modebutton[0].classList.remove("button");
		modebutton[1].classList.remove("button");
		modebutton[2].classList.remove("button");

   this.classList.add("button");
   if(this.textContent === "Easy")
   {
   	numsquares=3;
   }
   else
   	if(this.textContent === "Medium")
   	{
   		numsquares=6;

   	}
   	else
   	{
   		numsquares=9;
   	}
   resetcolor();
	});
}
}
function resetcolor()
{
	colors = generatecolors(numsquares);
 //pick a new random color from array
 pickedColor=pickrandom();
 //change color display to match picked color
 colorDisplay.textContent =pickedColor;
 //change color of squares
 messageDisplay.textContent = " ";
 reset.textContent = "New Colors"
 for(var i=0;i<squares.length;i++)
 {
 	if(colors[i])
 	{
 		squares[i].style.background ="block";
 	squares[i].style.background =colors[i];
 }
 else
 {
 	squares[i].style.background ="none";
 }
 }
 h1.style.background ="steelblue";
}
reset.addEventListener("click",function()
{
 resetcolor();
});

function changecolors(color)
{
	//loop through all squares
	for(var i=0;i<numsquares;i++)
	{
		//change each color to match given color
		squares[i].style.background = color;
	}
}
function pickrandom()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
 function generatecolors(num)
 {
 	//make an array
 	var arr = [];
 	
 	for(var i=0;i<num;i++)
 	{
 		// add num random colors to array
 		arr.push(randomcolor());
 	}
 	//return that array
 	return arr;
 }
 function randomcolor()
 {
 	//pick a red from 0-255
 	var r= Math.floor(Math.random()*256);
 	//pick a green from 0-255
 	var g= Math.floor(Math.random()*256);
 	//pick a blue from 0-255
 	var b= Math.floor(Math.random()*256);

 	return "rgb(" + r +", " + g + ", " + b + ")";

 }
