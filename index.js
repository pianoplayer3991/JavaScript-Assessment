//Answer #1
// A function that checks whether a given object is a Function or an Array.
// objectInput {Object} - the object to be checked
function arrayOrFunction(objectInput) {
    if (typeof objectInput == typeof function () { }) {
        console.log("object is a function")
    } else if (Array.isArray(objectInput)) {
        console.log("object is an array");
    } else {
        console.log("object is not an array or a function");
    }
}

var object1 = [1, 2, 3];
var object2 = function testMe() {
    console.log("hello!");
}
var object3 = 27;

//arrayOrFunction test 1
//console.log(arrayOrFunction(object1));
//arrayOrFunction test 2
//console.log(arrayOrFunction(object2));
//arrayOrFunction test 3
//console.log(arrayOrFunction(object3));



//Answer #2
// calculates the sum of two input values
// num1 {Number} - first value input, num2 {int} - second value input
// return {Number} - returns the sum of the two input values
function sumOfTwoNums(num1, num2) {
    return num1 + num2;
}

//sumOfTwoNums test 1
//console.log(sumOfTwoNums(3, 8));
//sumOfTwoNums test 2
//console.log(sumOfTwoNums(2.5, 3.7));
//sumOfTwoNums test 3
//console.log(sumOfTwoNums(-4, 8));



//Answer #3
// determines if two input values are of equal value and data type
// vallue1 - first input value, value2 = second input value
// return {Boolean} - returns true if input values are equal and of the same data type, else returns false
function isEquals(value1, value2) {
    if (value1 === value2) {
        return true;
    } else {
        return false;
    }
}

//isEquals test 1
//console.log(isEquals(2, 4));
//isEquals test 2
//console.log(isEquals(2, "2"));
//isEquals test 3
//console.log(isEquals("Hello", "Hello"))


//Answer #4
//function to return the middle 4 characters of a string
//stringInput {String} - string to slice middle 4 characters of
//returns {String} - returns the middle 4 characters of a string as a new string
//  if string is an odd length, the "middle" 4 characters will be sliced starting 1 character to the left of the middle character
function middleFour(stringInput) {
    var middleIndex = 0;
    var inputLength = stringInput.length;
    var mid4string = "";
    if (inputLength < 4) {
        console.log("stringInput must be at least 4 characters long");
        return null;
    } else if (inputLength % 2 == 0) {
        middleIndex = inputLength / 2;
        mid4string = stringInput.slice(middleIndex - 2, middleIndex + 2)
        return mid4string;
    } else {
        middleIndex = Math.floor(inputLength / 2);
        mid4string = stringInput.slice(middleIndex - 1, middleIndex + 3);
        return mid4string;
    }
}

//middleFour test 1
//console.log(middleFour("cat"));
//middleFour test 2
//console.log(middleFour("elephant"));
//middleFour test 3
//console.log(middleFour("establishment"));


//Answer #5
// function to split a string into two equal parts. If string is odd length, the middle character will be repeated (it will show at the end of the first half, and the beginning of the second half)
// stringInput {String} - the string that is input to be split
// return {Array} - returns an array containing a string for the first half of the stringInput and a string for the second half of the stringInput
function splitString(stringInput) {
    var inputLength = stringInput.length;
    var middleIndex = 0;
    var stringHalves = ["", ""];

    if (inputLength % 2 == 0) {
        middleIndex = inputLength / 2;
        stringHalves[0] = stringInput.slice(0, middleIndex);
        stringHalves[1] = stringInput.slice(middleIndex);
        return stringHalves;
    } else {
        middleIndex = Math.floor(inputLength / 2);
        stringHalves[0] = stringInput.slice(0, middleIndex + 1);
        stringHalves[1] = stringInput.slice(middleIndex);
        return stringHalves;
    }
}

//splitString test 1
//console.log(splitString("forest"));
//splitString test 2
//console.log(splitString("awesome"));
//splitString test 3
//console.log(splitString("hi"));



//Answer #6
//function to determine the largest numeric from an Array
//inoutArray {Array} - the array to be input
//return {Number} - returns the highest Number. Returns null if there are no numerics in the array.
function maxNumeric(inputArray) {
    var maxNum = null;
    inputArray.forEach((element) => {
        if (typeof element == typeof 1) {
            if (element > maxNum) {
                maxNum = element;
            }
        }
    })
    return maxNum;
}

//maxNumeric test 1
//console.log(maxNumeric([27, 14, 3]));
//maxNumeric test 2
//console.log(maxNumeric(["two", 5, "ten"]));
//maxNumeric test 3
//console.log(maxNumeric(["one", "two", "three"]));



//Answer #7
// function that filters out elements that don't match any other elements in a provided array
// inputArray {Array} - the array to be filtered
// return {Array} - returns a new array with all unmatched items removed compared to the provided inputArray
function filterUnmatched(inputArray) {
    var matched = [];

    for (var i = 0; i < inputArray.length; i++) {
        for (var j = 0; j < inputArray.length; j++) {
            if (i == j) {
                continue;
            } else if (inputArray[j] == inputArray[i]) {
                matched.push(inputArray[i]);
                break;
            }
        }
    }
    return matched;
}

//filterUnmatched test 1
//console.log(filterUnmatched([1, 1, 2, 3]));
//filterUnmatched test 2
//console.log(filterUnmatched(["car", "cat", "cat", "dog"]));
//filterUnmatched test 3
//console.log(filterUnmatched(["a", "b", 2, 2, "c", "b"]));



// Answer #9
// function that will sort a provided array of numerics. The provided array can be sorted from highest to lowest, or from lowest to highest.
//inputArray {Array} - the provided array to be sorted
//criteria {String} - If "high" is passed, the array will be sorted high to low. If "low" is passed, the array will be sorted low to high.
//return {Array} - returns a new sorted array compared to the original array
function sortArray(inputArray, criteria) {
    var sortedArray = [];
    sortedArray[0] = inputArray[0];
    if (criteria == "low") {
        for (var i = 1; i < inputArray.length; i++) {
            for (j = 0; j < sortedArray.length; j++) {
                if (inputArray[i] <= sortedArray[j]) {
                    sortedArray.splice(j, 0, inputArray[i]);
                    break;
                } else if (j == sortedArray.length - 1) {
                    sortedArray.push(inputArray[i]);
                    break;
                }
            }
        }
    } else if (criteria == "high") {

        for (var i = 1; i < inputArray.length; i++) {
            for (var j = 0; j < sortedArray.length; j++) {
                if (inputArray[i] >= sortedArray[j]) {
                    sortedArray.splice(j, 0, inputArray[i]);
                    break;
                } else if (j == sortedArray.length - 1) {
                    sortedArray.push(inputArray[i]);
                    break;
                }
            }
        }
    }
    return sortedArray;
}

//sortArray test 1
//console.log(sortArray([1, 2, 3, 4, 5], "high"));
//sortArray test 2
//console.log(sortArray([5, 2, 8, 7, 9, -4, 13, 22, 100], "high"));
//sortArray test 3
//console.log(sortArray([5, 2, 8, 7, 9, -4, 13, 22, 100], "low"));

//Answer #10
//Create a timed execution which executes every 2 minutes and is cancellable.
//a function that allows you to repeatedly call a chosen function with a timed interval. 
//inputFunction {Function} - the name of the function to be repeated,
//timer {Numeric} - the amount of milliseconds before each function call.
//timesRepeated {Numeric} - number of times the function will be called before the repetition stops. Needs to be a whole number.
function myTimer(inputFunction, timer = 1000, timesRepeated = 1) {
    var repeats = 1;
    var coolTimer = setInterval(function () {
        repeats++;
        inputFunction();
        if (repeats > timesRepeated) {
            clearInterval(coolTimer);
        }
    }, timer)

}

function annoyDad() {
    console.log("are we there yet?");
}

//myTimer test
//myTimer(annoyDad, 100, 3);



//Answer #11
import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

const countries = await axios.get("https://restcountries.com/v3.1/all")
    .then(function (response) {
        // handle success
        return response;
    })

function filterCountries(dataInput) {
    var filteredList = [];
    //console.log(dataInput.data);
    for (var i = 0; i < dataInput.data.length; i++) {
        if (dataInput.data[i].name.common[0] == "U") {
            filteredList.push(dataInput.data[i]);
        }
    }
    return filteredList;
}

//filterCountries test
//console.log(filterCountries(countries));


app.listen(port, () => {
    console.log("Server running on port 3000")
});


//Anser #12

import data from './contacts.json' assert { type: 'json' };
function conctactFilter(data) {
    var filteredList = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].firstName == "Mike" || data[i].firstName == "David") {
            continue;
        } else {
            filteredList.push(data[i]);
        }
    }
    return filteredList;

}

//contactFilter test
//console.log(conctactFilter(data));






//#13) Create a routine which correctly implements the usage of "Promise.all".
var step1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("all")
        resolve(("all"));
    }, 5000)
});

var step2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("for")
        resolve(("for"));
    }, 1900)
});

var step3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("one")
        resolve(("one"));
    }, 1800)
});

var step4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("and")
        resolve(("and"));
    }, 1700)
});

var step5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("one")
        resolve(("one"));
    }, 1600)
});

var step6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("for")
        resolve(("for"));
    }, 1500)
});

var step7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("all")
        resolve(("all"));
    }, 1500)
});

Promise.all([step1, step2, step3, step4, step5, step6, step7]).then((values) => {
    console.log(values);
    });

