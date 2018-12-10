class userCreator {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    sayName() {
        console.log('I am ' + this.name);
    }

    increment() {
        this.score++;
    }
}

const user1 = new userCreator('Ursula', 10);
const user2 = new userCreator('Ariel', 20);

user1.sayName();

class paidUserCreator extends userCreator {
    constructor(paidName, paidScore, accountBalance) {
        super(paidName, paidScore);
        this.accountBalance = accountBalance;
    }

    increaseBalance() {
        this.accountBalance++;
    }
}

const paidUser1 = new paidUserCreator('Sam', 6, 16);

paidUser1.increaseBalance();
paidUser1.sayName();