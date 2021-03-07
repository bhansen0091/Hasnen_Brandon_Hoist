
// 1------------------------------------------------------------------------------------

console.log(hello);
var hello = "world";

/*
    var hello;
    console.log(hello);     //undefined
    hello = "world";        //assignment
*/

//results:
//undefined

//2------------------------------------------------------------------------------------

var needle = "haystack";
test();
function test() {
    var needle = "magnet";
    console.log(needle);
}


/*
    var needle = "haystack";        //declares and assigns
    function test() {               //hoists the function
        var needle = "magnet";
        console.log(needle);
    }
    test();                         //calls the function
        var needle = "magnet";      //locally assign needle = "magnet"
        console.log(needle);        //logs the local needle (displays "magnet" to the console)
*/

//results:
//magnet

//3------------------------------------------------------------------------------------

var brendan = "super cool";
function print() {
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan);

/*

var brendan = "super cool";     //assignment
function print() {              //function is created but is never called
    brendan = "only okay";      
    console.log(brendan);
}
console.log(brendan);           //displays "super cool" to the console

*/

//results:
//super cool

//4------------------------------------------------------------------------------------

var food = "chicken";
console.log(food);
eat();
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}

/*

var food = "chicken";           //declaration and global assignment
function eat() {                //function is hoisted, but not yet called
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}
console.log(food);              //displays the current global for food "chicken"
eat();                          //calls the function eat()
    var food;                   //locally hoists the new food variable
    food = "half-chicken";      //locally assigns food to "chicken"
    console.log(food);          //displays the current local "half-chicken" to the console
    food = "gone"               //reassigns food to "gone" but never uses the variable

*/

//results:
//chicken
//half-chicken

//5------------------------------------------------------------------------------------

mean();
console.log(food);
var mean = function() {
    food = "chisken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//results:
//error mean is not a function

//6------------------------------------------------------------------------------------

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock"
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/*

var genre;                  //global variable is hoisted and declared, but not assigned
function rewind() {         //function is hoisted but not called
    genre = "rock"
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(disco);         //disco is not defined at this point to displays undefined
genre = "disco"             //global var genre is assigned "disco"
rewind();                   //function is called
    var genre;              //local variable is declared but not assigned
    genre = "rock";         //local genre is assigned "rock"
    console.log(genre);     //displays the current local variable "rock" to the console
    genre = "r&b";          //local genre is assigned "r&b"
    console.log(genre);     //displays the current local variable "rock" to the console
console.log(genre);         //displays the current global variable "disco" to the console
*/

//results
//undefined
//rock
//r&b
//disco

//7------------------------------------------------------------------------------------

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/*

dojo = "san jose";          //global variable is assigneg "san jose"
function learn() {          //function is hoisted, but not run yet
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);          //displays the current global var dojo "san jose" to the console
learn();                    //function is called
    var dojo;               //local variable is hoisted and declared, but not assigned
    dojo = "seattle";       //local variable dojo is assigned "seattle"
    console.log(dojo);      //local variable is displayed to the console "seattle"
    dojo = "burbank";       //local dojo is reassigned "burbank"
    console.log(dojo);      //local variable is displayed to the console "seattle"
console.log(dojo);          //global dojo is displayed to the console "san jose"

*/

//results:
//san jose
//seattle
//burbank
//san jose

//8------------------------------------------------------------------------------------

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//error at line 200, dojo is contant and cant be assigned a new value

