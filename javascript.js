//Default Parmeters
const bookings = [];
const createBooking  = function(flightName,numPassanger=1,price= 3){
    const booking ={
        flightName,numPassanger,price
    };
    console.log(booking);
    bookings.push(booking);
}
//createBooking('LM123',2,800)

//Value vs Reference in functions

const flight = 'LM123';
const jonas = {
    name:"Shashank Dhakate",
    passport:"234r"
}
const checkIn = function(flightNum,passenger){
    flightNum = "LH33",
    passenger.name = 'Mr'+passenger.name
    if(passenger.passport === "234r")
    {
        console.log("Checked In");
    }
    else{
        console.log("wrong passenger")
    }
}

// checkIn(flight,jonas)
// console.log(flight);
// console.log(jonas)

/*
flightNum is primitive
jonas object is reference
 */

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*100000000)
}
newPassport(jonas);
checkIn(flight,jonas);
//console.log(jonas);
//console.log(flight)

//Javascript does not have pass by reference
/*
However in case of object we pass the value of its refernce 
as a value
 */

//FIRST CLASS FUNCTIONS
/*
functions as simply values
functions are just another type of object
 */

//HIGHER ORDER FUNCTIONS
/*
functions that receives another function as an argument
that returns new function or both
 */

/*
ALL FUNCTIONS ARE VALUES
HIGHER ORDER FUNCIONS IN PRACTICE
 */

//FUNCTION ACCEPTING CALLBACK
/*
 */

const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase()
}

const upperFirstWord = function(str){
    const [firstWord,...other] = str.split(" ");
    return [firstWord.toUpperCase(), ...other].join(" ")
}

const transformer = function(str,fn){
    console.log(str);
    console.log("Transforming string");
    console.log(fn(str));
    console.log(fn.name)

}
transformer("Javascript is the best!",upperFirstWord);

//FUNCTIONS RETURNING OTHER FUNCTION
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}
const greetHey = greet("Hey");
greetHey("Shashank");
greetHey("Abhishek")
greet("Yo")("Machine")

//CALL AND APPLY METHOD
const Kingfisher = {
airline:'Kingfisher',
flight:'LM122',
iataCode:'LM',
bookings:[],

book(flightNum,name){
   this.bookings.push(`${this.airline} ${this.flight} ${flightNum} ${name}`)
    console.log(`${this.airline} ${this.flight} ${flightNum} ${name}`)
},

}
Kingfisher.book("23","Shashank");

const JetAirways = {
    airline:"Jetairways",
    flight:"JM44",
    iataCode:"JM",
    bookings:[]
}

const book =  Kingfisher.book;
book.call(JetAirways,34,"Manoj");

//BIND
const JetAirwaysFunction = book.bind(JetAirways);
JetAirwaysFunction(22,"Rishi");

/*
with event listeners
call method call the function
button.addEventListener("click",gh.buy.bind(gh))
 */

//IIFE
(function() {
    console.log("run once");
})();

//CLOSURES 
const secureBooking = function(){
    let passengerCount = 0;
    return function(){
        passengerCount++;
        console.log(`${passengerCount} passenger`)
    }

}

const booker = secureBooking();
/*BOOKER IS GLOBAL CONTEXT
IT REMEBERS THE VALUE OF PASSENGER
FUNCTION HAS ACCESS TO VARIABLE ENVIRONMENT IN 
which it was created
 */
booker();
booker();
booker();
console.dir(booker)