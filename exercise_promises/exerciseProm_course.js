
//wyswietlenie zawartosci API w tym wypadku users

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

// zapisanie tego samego za pomoca ASYNC AWAIT

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

fetchUsers()

// jezeli mamy kilka linkow z ktorych chcemy skorzystac uzywamy :

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]

// Promise.all(urls.map(url => 
//     fetch(url).then(resp => resp.json())
//     )).then(array => {
//         console.log('users', array[0])
//         console.log('posts', array[1])
//         console.log('albums', array[2])
//     }).catch('oops')


// zapisanie powyzszego kodu za pomoca asyns await

//zeby dodac .catch trzeba dodac try {} oraz catch{}

const getData = async function() {
    try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url => 
        fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (error){
        console.log('oops', error)
    }
}

//uzycie for await of

async function fetchUsers() {
    const urls = ['https://api.example.com/user/1', 'https://api.example.com/user/2'];

    for await (const url of urls) {
        const response = await fetch(url);
        const userData = await response.json();
        console.log(userData);
    }
}


const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
  ]
  
  Promise.all(urls.map(url => {
      fetch(url).then(people => people.json())
  }))
    .then(array => {
      console.log('1', array[0])
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err));

