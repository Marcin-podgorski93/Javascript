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

let newArray = []
array.forEach( user => {
  let username = user.username + "!";
  newArray.push(username);
})

console.log('forEach', newArray);

// or

// const newArray = [];
// array.forEach(user => newArray.push(user.username + "!"));
// console.log('forEach', newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map( user => user.username + "?");
  console.log('map', mapArray);

// or

// const mapArray = array.map(user => {
// 	let { username } = user;
// 	return username + "?";
// })
// console.log(mapArray);


//Filter the array to only include users who are on team: red

const filterArray = array.filter(user => user.team === "red");
console.log('filter', filterArray);

// or 

// const filterArray = array.filter(user => {
// 	return user.team === "red";
// })
// console.log(filterArray);

// or

// const filterArray = array.filter(user => {
//   let { team } = user;
//   return team === "red"});
// console.log('filter', filterArray);

//Find out the total score of all users using reduce

const reduceArray = array.reduce((accumulator, user) => {
  return accumulator + user.score
}, 0);
console.log('reduce', reduceArray); // score total 71 

// (1), what is the value of i? index number 
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })

// pure function

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
// 	return num * 2;
// })


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const answer = array.map(user => {
  user.items = user.items.map(item => item + "!");
    return user;
})
console.log('map new', answer);


// or

// const answer = array.map(user => {
// 	user.items = user.items.map(item => {
// 		return item + "!"
// 	});
// 	return user;
// })
// console.log(answer);