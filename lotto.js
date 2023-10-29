/* Exercise: You are going to build a PowerBall Generator
5 white balls: 1-69
1 red ball aka Power Ball: 1-26
1 or many functions that will generate a power ball set of numbers
use emojis: red ball and white ball
Extra points:
- the white balls are not repeated
- if you build an html page with a button and when pressing the button you get those numbers */

function powerballgenerator

var powerballarray = [1,2,3,4,5]


for (let i = 1; i<=5; i++)
{

powerballarray [ i ] =  Math.random() * 69;
}


for (let j = 1; j<=5; j++){


console.log (powerballarray[j]);


}