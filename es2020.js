// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n
3n + 4n + 1n // add to all numbers n and get 8n
3 + 4 + 1 // remove n and we get 8

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }

// changed

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }


// Exercise 4: What do these each output?
console.log(false ?? 'hellooo') // false
console.log(null ?? 'hellooo') // 'hellooo'
console.log(null || 'hellooo') // 'hellooo'
console.log((false || null) ?? 'hellooo') // 'hellooo'
console.log(null ?? (false || 'hellooo')) // 'hellooo'

const ztmMonsters = [
    {id: 1, monster: 'Mr.Mouse', level: 1},
    {id: 2, monster: 'Mac', level: 30},
    {id: 3, monster: 'Denodude', level: 17},
    {id: 4, monster: 'Pye', level: 5},
];

const filterMonster = ztmMonsters.filter(item => item.level > 15); //wyswietlenie tylko tablic ktore 
//maja wyzszy lvl niz 15 
console.log(filterMonster);

console.log(filterMonster[filterMonster.length -1]); // wyswietli tylko ostatnia wartosc 
// lub
console.log(filterMonster.at(-1)); //uzycie ES2022

const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];