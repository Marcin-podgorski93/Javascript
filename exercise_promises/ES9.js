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


