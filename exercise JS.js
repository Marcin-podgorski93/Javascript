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

//or

const abbrevName1 = (name) => {
    return name.split(" ").map(name => name[0].toUpperCase()).join(".");
  }


console.log(abbrevName1("Michal wisniewski"))

console.log(abbrevName("Marian Nowak"));

console.log(firstLetter("marcin nowak"));

console.log(firstLetter1("Marcin Nowak"));





const mul5 = -10;

const power2 = mul5.length;

console.log(power2);

const string = mul5.toString();

console.log(string);

const stringnum = mul5 < 0 ? 1 : 0;

console.log(stringnum);

const power = string.length - stringnum;

console.log(power);

const multiplyby5 = Math.pow(5, power);

console.log(multiplyby5);


function multiplyBy5(num) {
    const string = Math.abs(num).toString();
    const multiply = Math.pow(5, string.length) * num;
    return multiply;
};

console.log(multiplyBy5(10));

console.log(multiplyBy5(10));

console.log(multiplyBy5(-2));

// or

function multiplyByy5(num) {
    const string = num.toString();
    const startIndex = num < 0 ? 1 : 0; // Ustal indeks początkowy
    const multiply = Math.pow(5, string.length - startIndex) * num;
    return multiply;
};

//the shortest version 

function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
  };

// ***************

const array7 = [5, 6, 7, 8];

  function check(arr, x) {
    return arr.includes(x);
  }

console.log(check(array7, 5))

// lub nie uzywajac funkcji mozna zapisac tak

const check9 = (a,x) => a.includes(x);


// or

function containsValue(arr, x) {
    // Użyj pętli for do iteracji przez elementy tablicy i sprawdzenia, czy x znajduje się w tablicy
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return true;
        }
    }
    return false;
}


console.log(containsValue(array7, 6));

// use forEach

function containsValue(arr, x) {
    // Użyj pętli forEach do iteracji przez elementy tablicy i sprawdzenia, czy x znajduje się w tablicy
    let found = false;
    
    arr.forEach(element => {
        if (element === x) {
            found = true;
        }
    });

    return found;
}



const double = array7.map(num => num * 2);

console.log(double);


// funkcja 

function dobleArr(arr9) {
    return arr9.map(num => num * 2);
}

console.log(dobleArr(array7));