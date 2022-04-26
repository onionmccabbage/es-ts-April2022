// import and run all imediate code from the maths module
import './maths'

// .. but we have no onging access to the imported members
// const r = new RandomNumberGenerator()

// so we import whatever was exported from the maths module
import * as maths from './maths'
const a = maths.absolute(-3)

// so we can import the default from the maths module
import RandomNumberGenerator from './maths'
const r = new RandomNumberGenerator()
