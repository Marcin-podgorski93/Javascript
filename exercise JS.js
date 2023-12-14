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

