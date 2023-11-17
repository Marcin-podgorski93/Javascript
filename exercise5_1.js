// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const newArray = [];
array.forEach(obj => newArray.push(obj.username + "!"));

console.log(newArray);

// other way 

const newArray = [];
array.forEach(({ username }) => newArray.push(username + '!'));

console.log(newArray);

//other way

let newArray = [];
array.forEach(obj => {
  newArray.push(obj.username + "!")
});

console.log(newArray);

//from course

let newArray = [];
array.forEach(user => {
  let { username } = user;
  newArray.push(username + "!")
});

//Create an array using map that has all the usernames with a "? to each of the usernames
// first using code from course
const mapArray = array.map(({username}) => username + "?");
console.log(mapArray);

// second code
const mapArray = array.map(obj => obj.username + "?");
console.log(mapArray);

//Filter the array to only include users who are on team: red
const newFilter = array.filter(({team}) => team === "red");
console.log(newFilter);

// other 

const newFilter = array.filter(obj => obj.team === "red");
console.log(newFilter);

// from course

const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log(filterArray);



const filterArray = array.filter(user => console.log(user.team)); // pokazanie samcyh danych z team 


//Find out the total score of all users using reduce
const reduceArray = array.reduce((accumulator, num) => accumulator + num.score, 0);
console.log(reduceArray);

// other way
const reduceArray1 = array.reduce((accumulator, num) => {
  return accumulator + num.score;
},0);
console.log(reduceArray1);

// (1), what is the value of i? Index in array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);
console.log(newArray);  

//or

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  return num * 2
});

console.log(newArray); 


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const bonus = array.map(user => user.items.map(item => item + "!"));
console.log(bonus);