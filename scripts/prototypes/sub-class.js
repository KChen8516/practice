function userCreator(name, score) {
    const newUser = Object.create(userfunctions);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

userfunctions = {
    sayName: function() {
        console.log("I'm " + this.name);
    },
    increment: function() {
        this.score++;
    }
};

const user1 = userCreator('Phil', 5);
user1.sayName();

function paidUserCreator(paidName, paidScore, accountBalance) {
    const newPaidUser = userCreator(paidName, paidScore);
    Object.setPrototypeOf(newPaidUser, paidUserFunctions);
    newPaidUser.accountBalance = accountBalance;
    return newPaidUser;
}

const paidUserFunctions = {
    increaseBalance: function() {
        this.accountBalance++;
    }
}

Object.setPrototypeOf(paidUserFunctions, userfunctions);

const paidUser1 = paidUserCreator('Alyssa', 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName();