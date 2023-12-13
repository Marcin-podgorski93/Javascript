const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0


const array = [-1,0,3,100, 99, 2, 99]

function biggestNumberInArray(arr) {
  let maxArr = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxArr) {
      maxArr = arr[i];
    }
  }
  return maxArr
}

const array = [-1,0,3,100, 99, 2, 99]

function biggestNumberInArray(arr) {
  let maxArr = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxArr) {
      maxArr = arr[i];
    }
    
  }
  return `Najwieksza liczba to ${maxArr}`;
}


biggestNumberInArray(array);

// or

const biggestNumberInArray = (arr) => {
  let maxArr = arr[0];
  arr.forEach(num => {
      if (num > maxArr) {
          maxArr = num;
      }
  });
  return `Największa liczba to ${maxArr}`;
};

const array = [-1, 0, 3, 100, 99, 2, 99];
console.log(biggestNumberInArray(array));

// forEach

const array = [-1,0,3,100, 99, 2, 99]

function biggestNumberInArray2(arr) {
  let maxArr = arr[0];

    arr.forEach(num => {
      if (num > maxArr) {
        maxArr = num;
      }
    });
        return maxArr; // lub uzyc console.log(maxArr)
  }
  biggestNumberInArray2(array);

  const array = [-1,0,3,100, 99, 2, 99]

  function biggestNumberInArray2(arr) {
    let maxArr = arr[0];
    arr.forEach(num => {
      if (num > maxArr) {
        maxArr = num;
      }
    });
    return `Najwieksza liczba to ${maxArr}`;
  }

  biggestNumberInArray2(array);

// for of 

function biggestNumberInArray3(arr) {
  let maxArr = arr[0];
    for (const item of arr) {
      if (item > maxArr) {
        maxArr = item;
      }
    }
      return maxArr
}

biggestNumberInArray3(array);



// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
const amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `Przedmiot ${item} znajduje sie w koszyku w ilosci ${basket[item]}`;
    }
  }
  return `Przedmiot nie znajduje sie w koszyku`;
}

checkBasket(amazonBasket, 'glasses')

checkBasket(detailedBasket, 'oranges')


// Przyklad asynchronicznosci z wykorzystaniem .setTimeout

console.log('1');
setTimeout(() => {
  console.log('2');
}, 0);
console.log('3');

Clean the room function: given an input of 
[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function 
that organizes these into individual array that is ordered.
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

array4.forEach(item => console.log(item)); 




const array4 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function ArrayFromAbove(arr) {

  const sortedArray = arr.sort((a, b) => a - b);
  resultArray = []; // tablica gdzie beda zbierane dane
  let currentNum = sortedArray[0];
  let currentArray = [currentNum];

  sortedArray.slice(1).forEach(num => {
    if (num === currentNum) {
      currentArray.push(num);
    } else {
      resultArray.push(currentArray);
      currentNum = num;
      currentArray = [num];
    }
  });

  // Dodaj ostatnią grupę, która może zostać pominięta w pętli
  resultArray.push(currentArray);

  return(resultArray)
}

ArrayFromAbove(array4);