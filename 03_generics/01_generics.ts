{
    // problem
    function firstEl(arr:any[]):any { // no way to ensure in-type matching
        return arr[0]
    }

    // so we use generics: by convention we use 'T' for a generic type
    //                          or arr:T[]
    const firstElGen = <T>(arr:Array<T>):T => { // whatever type goes in, the same type is returned
        return arr[0]
    }
    // some collections
    const s = firstElGen( ['a', 'b', 'c'] )
    const n = firstElGen( [3,2,1] )
    const u = firstElGen( [] ) // returns 
    
    console.log(`${typeof(s)} ${s} ${typeof(n)} ${n} ${typeof(u)} ${u}`)
}