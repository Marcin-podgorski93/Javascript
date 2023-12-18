const arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];



function countSheeps(sheep) {
   return sheep.filter(num => num === true).length;
  }

  console.log(countSheeps(arr));


// lub

function countsheep5(sheep) {
    const countTrue = sheep.filter(value => value === true).length;
    return countTrue;
}

console.log(countsheep5(arr));


// uzycie funkcji reduce 


function countSheeps2(sheep) {
    const count = sheep.reduce((acc, currentNumber) => {
        if(currentNumber === true) {
            acc.true++;
        } else {
            acc.false++;
        }
        return acc;
    }, {true: 0, false: 0});

    return count;
}


    console.log(countSheeps2(arr))

function countsheep3(sheep) {
    const count = sheep.reduce((acc, currentNumber) => {
        currentNumber === true ? acc.true++ : acc.false++;
        return acc;
    }, {true: 0, false : 0});

    return count;
}

console.log(countsheep3(arr))

//uzycie 0 i 1 dla lepszego wgladu o co chodzi w tym reduce

function countsheep4(sheep) {
    const count = sheep.reduce((acc, currentNumber) => {
        currentNumber === true ? acc[1]++ : acc[0]++;
        return acc;
    }, [0, 0]);

    return count;
}

console.log(countsheep4(arr))

//Make a function that will return a greeting statement that 
//uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Marcin"));

// upgrade


function greet1(name) {
    if (name) {
        return `Hello, ${name} how are you doing today?`;
    } else {
        return `Please provide your name.`
    }
}

// console.log(greet1("Marcin"));
// console.log(greet1());


const array = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

function findNeedle(arr) {
    const resultArray = arr.map((value, i) => {
        console.log(value, i);
    if (value === "needle") {
        console.log(`found the needle at position ${i}`)
    }
        return value;
});

    return resultArray;
}

// console.log(findNeedle(array));





const resultArray = array.indexOf('needle');
console.log(resultArray);


function findNeedle5(arr) {
    const resultArray = arr.indexOf('needle');

    if (resultArray !== -1) {
        return `found the needle at position ${resultArray}`;
    } else {
        `not found`
    }
}

console.log(findNeedle5(array));


// or 

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }


//

function findNeedle(array) {
    // let result = 'not found'; mozna dac ale nie trzeba 
  
    array.forEach((element, index) => {
      if (element === 'needle') {
        result = `found the needle at position ${index}`;
      }
    });
  
    return result;
  };
  
  console.log(findNeedle(array));

// the best 

function findNeedle3(arr) {
    return arr.includes('needle') ? `found the needle at position ${arr.indexOf('needle')}` : 'not found';
  }
  
  console.log(findNeedle3(array));

//

function findNeedle6(arr) {
    arr.forEach((element, index) => {
        if (element === 'needle') {
            result = `found the needle at position ${index}`
        }
    });

    return result;
}

console.log(findNeedle6(array));

// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed , vacation) {
    if (employed && !vacation) {
        return true;
    } else {
        return false;
    }
}

console.log(setAlarm(true, false));

//or

function setAlarm2(employed, vacation) {
    return (employed && !vacation) ? true : false;
}

console.log(setAlarm2(true,false));

// or 

function setAlarm1(employed, vacation) {
    return employed && !vacation;
  }
  

//   Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

const arrayToremove = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"];

function newArray(arr) {
    // mozna uzyc return arr.filter((_, index) => index % 2 === 0);
    // gdzie "_" oznacza ze ta wartosc jest ignorowana ale mzona napisac cokolwiek
    return arr.filter((element, index) => index % 2 === 0);
}

console.log(newArray(arrayToremove));


// Write a function that accepts an integer n and a string s as parameters,
//  and returns a string of s repeated exactly n times.

function multiply(times, string) {
    return string.repeat(times);
}

console.log(multiply(5, "Marcin"));

// or

const multiply1 = (string, times) => string.repeat(times);

console.log(multiply1("Marcin", 5));


function firstLetter(name) {
    const splite = name.toUpperCase().split(" ");
    const first = splite[0].charAt(0);
    const last = splite.length > 1 ? splite.slice(-1)[0][0] : "";
    return `${first}.${last}`;
}


// or

function firstLetter1(fullName) {
    const splite = fullName.split(" ");
    const first = splite[0][0];
    const last = splite.length > 1 ? splite[splite.length - 1][0] : "";
    return `${first}.${last}`;
}

// or (The best because is short)

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
    // return nameArray; //wynik ["Marian","Nowak"]
  }

console.log(abbrevName("Marian Nowak"));

console.log(firstLetter("marcin nowak"));

console.log(firstLetter1("Marcin Nowak"));