//Assignment 1 - Part A - Nums
var num1 = 3;
var num2 = 5;
console.log(num1+num2);

//Assignment 1 - Part B - Strings
var string1 = "Hello";
var string2 = "World";
console.log(string1+' '+string2);

//Assignment 2 - MultiDimensional Array
var cars = [['Ferrari','488 Spider','V12'],['McLaren','P1','V10'],['Porsche','918','V10']];
console.log(cars[1]);
console.log(cars[2][1]);

//Assignment 3 - If Statements
var userInput = 189;
if(userInput < 100){
  alert("Your Variable is less than 100");
}
else{
  alert("Your Value is:"+userInput+"\nYour Value is larger than 100!")
}

//Assignment 4 - Declaring functions
//declaring the function
function alertArgument(arg1){
    return alert(arg1);
}

//calling the function
alertArgument("Hi There!");

//Assignment 5 - Virtual Doors
function openDoor(door){
  //opened door 1
    if(door === 1){
      alert("You opened door 1!\nYou won a goat!!!");
    }
    //opened door 2
    else if(door === 2){
      alert("You opened door 2!\nYou won a nail clipper!!!");
    }
    //opened door 3
    else if(door === 3){
      alert("You opened door 3!\nYou won a meal for 2 at Subway!!!");
    }
    else{
      alert("you opened door "+door+"\nThere is no such door, So no Prize for you, come back 1 year!");
    }
}

openDoor(1);
openDoor(2);
openDoor(3);
openDoor(2889);
