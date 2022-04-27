// a simple adding calculator
const init = ()=>{
    const form = document.querySelector('form')! // ! ensures the value is not null
    form.addEventListener('submit', submitHandler)
}
const submitHandler = (e:Event)=>{
    e.preventDefault() // we do not want the fom to submit!!!!
    console.log(e.target)
    const a = document.querySelector("input[name='a']") as HTMLInputElement
    const b = document.querySelector("input[name='b']") as HTMLInputElement
    const result = add(Number(a.value), Number(b.value))
    const resultElement = document.querySelector('p') as HTMLParagraphElement
    if(resultElement){
        resultElement.textContent = result.toString()
    }
}
const add = (a:number, b:number)=>{
    return a+b
}
// immediate code
init()