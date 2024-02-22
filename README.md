Create javascript external file name it “functionsScript.js” and another external file name it “consumingScript.js”
First file will contain all functions and the other js file will contain the calling of these functions

1- Considering 2 Teams Playing a Game
We need to build functions to calculate the winner Team.
Any Team can win if its average of three scores is greater than the other Team 
average score, otherwise we have no winner.

a-create a function calcAverage to calculate the average of 3 scores.
b-create a function checkWinner to determine the winner Team

Testing Data : 
Case 1 : Team1 scores (44,23,71) Team2 scores (65,54,49)
Case 2 : Team1 scores (85,54,41) Team2 scores (23,34,27)

2- Take 2 numbers from user using prompt, (make sure that user entered a 
number value not username or empty string, if not show the prompt again)
Then display the summation result on console

3- Now take how many numbers the user wish to sum from a prompt then repeat number step 2



For Testing hoisting and function’s call
1- Create function name it printVariables(value_1,value_2,value_3) (as
function declaration) the function call will print the values on console.
a- Call the function
b-try to console.log the values of value1,value2,value3 on
consumingScript.js file ??
c- Try to call the function before definition line?
d- Try to call the function with less than 3 parameters
printVariables(3,5) .
e- What if you call the function with too many parameters ? (more
than 3)
Can you print them using (arguments)?
f- Define var value_4=3; value_5=5; inside the function’s block
then before calling the function try to console.log the values value_4
and value_5.??
g- In step f , call the function and try to print value_4 and
value_5?
h- Define the following variable on your script (functions’ script) outside the 
function let value_4 =90;
      o in consuming script Before calling the function try to console.log the 
       value value_4
      o then try to console.log value_4 after calling the fucntion
      o Now try to console.log the value of value_4 inside the function but before variable’s definition line.
      o Now inside the function what if you remove let from value_4and repeat the pervious Steps again
