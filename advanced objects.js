// context vs scope 

const object4 = {
    a: function() {
        console.log(this);
    }
}
// instantiation
class Player {
    constructor(name, type) {
        console.log(`player`, this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}