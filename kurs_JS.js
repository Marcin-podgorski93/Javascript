var saying = "Home sweet home";

console.log(saying.length);
console.log(saying.indexOf("o"));

function doubleInteger(i) {
  return i * 2;
}

console.log(doubleInteger(2));

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

var tekst = "aba";

function count(string) {
  const result = {};

  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    console.log(element);
    if (result[element]) {
      result[element]++;
    } else {
      result[element] = 1;
    }
  }
  return result;
}

console.log(count(tekst));

function count1(string) {
  const result = {};

  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    console.log(element);

    // uzycie ternary operatora
    result[element] ? result[element]++ : (result[element] = 1);
  }
  return result;
}

console.log(count1(tekst));

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function checkText(str) {
  str = str.toLowerCase();
  let charCount = {};
  for (const char of str) {
    console.log(char);
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

console.log(checkText("abcde"));

function checkText1(str) {
  str = str.toLowerCase();
  let charCount = {};
  for (const char of str) {
    console.log(char);
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let duplicates = 0;
  for (const key in charCount) {
    if (charCount[key] > 1) {
      duplicates++;
      console.log(duplicates);
    }
  }

  return duplicates;
}

console.log(checkText1("aaccde"));

function disevowel2(str) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  return str
    .split("") //rozbijamy na tablice znakow
    .filter((char) => !vowel.includes(char)) //filtrujemy
    .join(""); //laczymy tablice z powrotem w ciag
}

console.log(disevowel2("This website is for losers LOL!"));

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function checkNum(num) {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] >= 0) {
      result.push(num[i]);
    }
  }
  return result;
}

console.log(checkNum([1, 2, "a", "b"]));

function checkIsNum(num) {
  return num.filter((item) => typeof item === "number");
}

console.log(checkIsNum([1, 2, "a", "b"]));

// //Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str
    .split("") //rozbijamy na tablice znakow
    .filter((char) => vowel.includes(char)).length; //sprawdzamy czy char jest samogloska // zwracamy dlugosc tablicy
}

console.log(getCount("apple"));

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)

function duplicateCount(text) {
  text = text.toLowerCase();
  for (const element of text) {
    console.log(element);
    if (element === element) {
    }
  }

  return text;
}

console.log(duplicateCount("aaBbcde"));

function checkEven(num) {
  return num % 2 === 0;
}

console.log(checkEven(6));

function countSheeps(sheep) {
  return sheep.filter((num) => num === true).length;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Marcin"));
