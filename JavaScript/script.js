let myData = 
{
    name: "Azeem",
    age: 20,
    isMarried: false
}

let Car = {
    name: "Toyota",
    model: "Camry",
    year: 2019,
    color: "Black",
}

let listOFName = [] //Declaration
listOFName = ["Bayo", "Eric", "Jame Doe", "John Doe"]

console.log(listOFName[2])

let arrayOfNumbers = [23,23,13,13,646,75,868,87,979,79]

arrayOfNumbers.push(100)

console.log(arrayOfNumbers)

listOFName.push("Tayo")

console.log(listOFName)


//Tells us that when an action is performed, it should do something
//Pusdocode
// we want to write a function
// that take in a number
//and check if the number is greater than 5
//if its greater it should output a text saying this number is greater than 5
//Else is should output a text saying this number is less than 5

function TestingIfStatement (number) {
    if (number == NaN ) {
        console.log("This is not a number")
    }
    if(number > 5) {
        console.log("This number is greater than 5")
    }
    else {
        console.log("This number is less than 5")
    }
}

TestingIfStatement(2)




//console.log(arrayOfNumbers[])

let Azeem = "My name is Azeem"; //Statement
Azeem = 100;
Azeem = true;
Azeem = null;

///console.log(myData)

document.getElementById("value").innerHTML = myData.isMarried;

var container = document.getElementsByClassName("container");
var Myname = document.getElementById("name").innerHTML = "Tayo Adebayo"
var Myname = document.getElementById("role").innerHTML = "Backend Developer"

//  function TestingFunction (name, surname) {
//     console.log(name + " " + surname)
//  }

 //TestingFunction("Tayo","Ade")

