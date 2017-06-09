// A cat function or 'class' in other languages with the attributes of name,
// age, friends and id. This function takes name, age and friends as args and assigns
// them when a new Cat is created

// token will be a random whole number between 0 and 999
var Cat = function(name, age, friends) {
   var token = Math.floor(Math.random()*1000);
   this.name = name;
   this.age = age;
   this.friends = friends;
   this.id = `Fel${token}`;
};

// Greet function saved to the Cat prototype that every Cat will be able to call
// This function will print out a greeting to a friend interpolating the name of 
// the friend that is passed in as well as the name, age and id of the instance of 
// this specfic Cat

Cat.prototype.greet = function(friend) {
   console.log(`Hi ${friend.name}, my name is ${this.name} and I am ${this.age} years-old. My id is ${this.id}.`);
};

// greetFriends saved to the Cat prototype that every Cat will be able to call
// This function will iterate over the friends array and call the greet function for each friend
// HOWEVER this will result in an error, because the context will change for every iteration of the forEach function
// because 'this' will refer to the inner function rather than Cat.

// Cat.prototype.greetFriends = function() {
//    this.friends.forEach(function(friend) {
//        this.greet(friend);
//    });
// };

// HERE ARE SOME ALTERNATIVES

// One option is to save the context of Cat and use it in the inner function. However there is a better way below.

Cat.prototype.greetFriends = function() {
    var that = this;
   this.friends.forEach(function(friend) {
       that.greet(friend);
   });
};

// Using an ES6 fat arrow function, which does not change the context to the new function that is 
// inside of the forEach. The this we call inside of a fat arrow function is the same this that is 
// on the out side and in this is case it is Cat.

// Cat.prototype.greetFriends = function() {
//    this.friends.forEach(friend =>  {
//        this.greet(friend);
//    });
// };

// New instances of lisa, bill and theo are created with different arguments being passed in

var lisa = new Cat("Lisa", 3, []);
var bill = new Cat("Bill", 4, []);
var theo = new Cat("Theo", 5, [lisa, bill]);


// Print 'Theo'
console.log(theo.name);

// Print undefined, because token was not saved as an instance variable.
// If we wanted to give the ability to print token we could save it like
// the other attributes by saving a this.token in the Cat function
console.log(theo.token);

// Invoke the greetFriends method on theo
// Will print greet(lisa) and greet(bill)
theo.greetFriends();