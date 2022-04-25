{
    let u:boolean | number | string
    u = true
    u = 5
    // u=[]

    // might be easier to declare a type alias
    type my_type = string | number | boolean | Error
    const fn = ():my_type=>{
        return 'ok'
    }
}