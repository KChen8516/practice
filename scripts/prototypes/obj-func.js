function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    // this function is copied on every new obj
    newUser.increment = function() {
        newUser.score++;
    }
    return newUser;
}

const user1 = userCreator('Phil', 6);
const user2 = userCreator('Julia', 10);
user1.increment();

// Solution 2
function userCreatorTwo(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increment: function() { this.score++ },
    login: function() { console.log("You're logged-in."); }
};
 const user3 = userCreatorTwo('Bob', 3);
 const user4 = userCreatorTwo('Elliot', 29);
 user3.increment();

//  Solution 3
function CreatorUser(name, score) {
    this.name = name;
    this.score = score;
}

CreatorUser.prototype.increment = function() {
    this.score++;
}

CreatorUser.prototype.login = function() {
    console.log('login');
}

const user5 = new CreatorUser('Eva', 9);
user5.increment();