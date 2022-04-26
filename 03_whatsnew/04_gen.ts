// ES has generators which yield repeatedly
function* fib(){ // the asterisk indicates this is a generator
    let first=1, second=1
    for (;;){ // a never ending loop
        let sum = second + first
        yield sum
        first = second
        second = sum
    }
}

// a utility
const prettyPrint = (item)=>{console.log(JSON.stringify(item))}
const iter = fib() // we now have an isntance of our generator - NB this does NOT run the infinite loop!
prettyPrint( iter.next() )
prettyPrint( iter.next() )
prettyPrint( iter.next() )
prettyPrint( iter.next() )
prettyPrint( iter.next() )
prettyPrint( iter.next() )
prettyPrint( iter.next() )