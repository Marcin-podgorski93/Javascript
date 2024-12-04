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
