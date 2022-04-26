export var pi = 3.14
export let sqrtTwo = 1.41
export const phi = 1.61

export default class RandomNumberGenerator {
    // no implementation
}

export const absolute = (num:number)=>{
    if (num <0) return num*-1
    return num
}

// some immediate code
console.log('inside the maths module')
