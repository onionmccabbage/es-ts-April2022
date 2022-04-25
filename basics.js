// here we will write some Typescript
// Typescript has two all-encompasing capabilities
// 1 - a language service - code hinting etc.
// 2 - data-typing capabilities
{ // ooh a block of code - a scope (ES6)
    // x = 'Ethel' // typescript complains  -we should use var or let or const
    var y = 1;
    var z = true;
    var n = 'Grace';
    var name_1 = 'Hopper';
    var fname = 'lily'; // a constant cannot be mutatted
    var digits = [3, 2, 1];
    digits.push(4, 5, 6);
    console.log(digits);
    // fuctions
    var fn = function (person) {
        console.log("Greetings ".concat(person, " one plus one is ").concat(1 + 1)); // always use back-ticks for string building
    };
    fn(n); // invoke the function
    // be clear - Javascript is a Prototypical language
    var obj1 = Object.create({}); // here the curly-brackets are an object
    var obj2 = Object.create(null);
    console.log(obj1, obj2);
}
