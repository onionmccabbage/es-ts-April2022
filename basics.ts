// here we will write some Typescript
// Typescript has two all-encompasing capabilities
// 1 - a language service - code hinting etc.
// 2 - data-typing capabilities

{ // ooh a block of code - a scope (ES6)
    // x = 'Ethel' // typescript complains  -we should use var or let or const
    // let y:number = false
    let z:boolean = true
    var n:string = 'Grace'
    let name:string = 'Hopper'
    const fname = 'lily' // a constant cannot be mutated
    // two ways to declare types of collections
    // NB ES is not fussy about mixing data types within a structure
    const digits:Array<number | string | boolean> = [3,2,1, 'oooh'] // identical in outcome
    const digits2:(number|string)[] = [3,2,1, 'yes']     // same as above
    digits.push(4,5,6)
    console.log(digits)
    // fuctions
    const fn = (person:string):void=>{ // I aim to return no type
        console.log(`Greetings ${person} one plus one is ${1+1}`) // always use back-ticks for string building
    }
    fn(n) // invoke the function

    console.log(Number.MAX_VALUE)

    // be clear - Javascript is a Prototypical language
    const obj1 = Object.create( {} ) // here the curly-brackets are an object
    const obj2 = Object.create( null )
    console.log(obj1, obj2)
}