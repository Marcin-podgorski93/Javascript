//Object spread operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 10
}

const { tiger, ...rest } = animals;

tiger

rest

const array = [1,2,3,4,5];

function sum(a,b,c,d,e) {
    return a + b + c + d + e;
}

sum(...array); //wynik 15

// funkcja await

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



//funkcja for await of

async function fetchUsers() {
    const urls = ['https://jsonplaceholder.typicode.com/users'];
    
    for await (const url of urls) {
        const response = await fetch(url);
        const userData = await response.json();
        console.log(userData);
    }
}

fetchUsers();