// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  const changedArray = [];
  const newArray = array.forEach((element) => {
    changedArray.push( element.username + "!" );
  });
  
  console.log( changedArray );
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  
  const mapArray = array.map( element => {
    let toAdd = ' "?';
    return element.username + toAdd;
  });
  
  console.log( mapArray );
  
  //Filter the array to only include users who are on team: red
  
  const filterArray = array.filter( element => {
  
    if ( element.team == "red" ) {
      console.log( element.username );
      return element;
    }
  
  });
   
  console.log( filterArray );
  
  //Find out the total score of all users using reduce
  
  const reduceArray = array.reduce( ( accumulator, element ) => {
    return accumulator + element.score;
  }, 0);
  
  console.log( reduceArray );
  
  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map(num => num * 2);
  
  console.log(newArray);
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  
  const answer = array.map( user => {
    user.items = user.items.map( items => {
        return items + "!";
    });
    return user;
  });
  
  console.log( answer );