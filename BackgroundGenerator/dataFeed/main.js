var database = [
    {
        username : "Adrian",
        password : "supersecret"
    },
    {
        username : "Samuel",
        password : "supersecret"
    },
    {
        username : "Costi",
        password : "supersecret"
    },
    {
        username : "GEorge",
        password : "supersecret"
    },
    {
        username : "Marian",
        password : "supersecret"
    }
];

var newsFeed = [
    {
        username : "Bobby",
        timeline : "So tired from all that learn"
    },
    {
        username : "Sally",
        timeline : "Javascript is soo cool!"
    }
];


var userNamePrompt = prompt("What's your username ?");
var passwordPrompt = prompt("What's your password ?");

function isUserValid(username, password){

    let checkIfExists = false;
    database.forEach( function(todo) {

        if( username === todo.username && 
            password === todo.password ) {
            checkIfExists = true;
        }

    });

    return checkIfExists;

}

function signIn(username, password) {


    isUserValid(username, password) ? alert( username + " is registered in our database") : alert("Sorry, We can't find "+ username ) ;

}

signIn(userNamePrompt, passwordPrompt);