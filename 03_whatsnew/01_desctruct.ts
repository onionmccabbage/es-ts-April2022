// desctructuring is ES
{
    // unpacking an array
    const values = [1, 3, 6, 11, 15, 21, 55, 42]
    //                                          ... is an elipsis
    const [first, second, third, , fifth, ...rest] = values
    console.log(first, second, third, fifth, rest)
    const fn = (x, y, ...rest)=>{} // other params end up in 'rest'
}
{
    // object descructuring
    const program = {name:'Play School', presenter:'Floella', started:1976, ended:1984}
    const {name:n, presenter:p, ...rest} = program
    console.log(`${n} presented by ${p} between ${rest['started']} and ${rest['ended']}`)
    
    // we can desctructure into pre-existing variables
    let name:string, presenter:string, started:number, ended:number
    ({name, presenter, started, ended}= program)
    console.log(`${name} presented by ${presenter} between ${started} and ${ended}`)

}
{ // tuple destructuring
    function getMission():[string, string, string] {
        return ['inform', 'educate', 'entertain']
    }
    const [inf, edu, ent] = getMission()
    console.log(inf)

}