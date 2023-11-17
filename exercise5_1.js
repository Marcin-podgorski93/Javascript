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

console.log(newArray);

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


//Filter the array to only include users who are on team: red


//Find out the total score of all users using reduce

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
