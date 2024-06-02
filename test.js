// function isIsogram(str) {
//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i];
//     console.log("Litera:", letter, ", indeks:", i);
//     if (str.indexOf(letter) !== i) {
//       console.log("Litera sie powtarza:", letter);
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isIsogram("Tees"));

// const word = "Test";

// const splitWord = word.split("");

// console.log(splitWord);

function isIsogram1(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    console.log(i);
    console.log(str[i]);
    const letter = str[i];
    console.log(letter);
    if (str.indexOf(letter) !== i) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram1("Tes"));
