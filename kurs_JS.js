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
