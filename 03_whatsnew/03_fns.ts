// ways to write a function
const fnB = x=>x*x // one param, one line of code, no brackets, no return statement
const fnC = x=>{return x*x} // must have braces if there is a return statement
const fnD = (x, y)=>x*y // if there are other than one pram, MUST have brackets
const fnE = (x, y)=>{return x*y}
const fnF = ()=>{return 'zero params MUST have brackets'}

// if you data-type, ten you MUST have the opening brackets
const fnZ = (x:number):number =>x*x

class Demo {
    someMethod (){
        // body of method
    }
}
