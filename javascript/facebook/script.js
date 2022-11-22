var database = [
    {
        username: "rubi",
        password: "secret",
    },
    {
        username: "sally",
        password: "123",
    },
    {
        username: "ingrid",
        password: "777",
    }
];

var newsFeed = [
    {
        username: "bobby",
        timeline: "tired"
    },
    {
        username: "sally",
        timeline: "cool"
    }
];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

function isUserValid(username, password) {
    for (var i = 0; i<database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
                return true;
        }
    }
    return false
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("WRONG!");
    }
}

signIn(userNamePrompt, passwordPrompt);