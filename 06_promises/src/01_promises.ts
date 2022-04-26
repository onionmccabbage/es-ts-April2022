const go = (isworking:boolean):Promise<string | Error>=>{
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            if (isworking){
                resolve('a string')
            } else {
                reject(new Error('it broke'))
        }}, 200) // wait a moment
    } )
}

// exercise the code
go(false) // promises are 'thenable'
  .then(  (val:string)=>{console.log(val)} )
  .catch( (err:Error)=>{console.log(err)} ) // typing gives use code completion
