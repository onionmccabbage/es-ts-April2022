import helloWorld from "./hello";
import {Penguin, Dog} from './animals' // NB no file extention
import RandomNumberGenerator, {phi, pi as pie, absolute} from './maths'
const r = new RandomNumberGenerator()
console.log(pie, r)
helloWorld()

type Animals = Penguin | Dog
const gromit:Dog = {breeds:['plasticene', 'silicone'], yearOfBirth:1991}
const thePenguin:Penguin = {breed:'evil', yearOfBirth:1950 }

const characters:Animals[] = [gromit, thePenguin]

console.log(characters)