// consume data from https://dummy.restapiexample.com/api/v1/employees
{
    // an interface
    interface Employee {
        id:number
        employee_name:string
        employee_salary:number
        employee_age:number
        profile_image:string
    }

    // a method to fetch data
    const fetchEmployees = async ():Promise<Array<Employee> | string> =>{
        const API = 'https://dummy.restapiexample.com/api/v1/employees'
        try { // async await enmsures we wait fro a Promise to be returned
            const response = await fetch(API) //defauklts to 'get'
            console.log(`${response}, ${typeof(response)}`)
            // do we need to await here???
            const {data} = await response.json() // we want the JSON part of the response
            console.log(`${data}, ${typeof(data)}`)
            return data // this is our promise
        }
        catch(err){
            if(err){
                return err.message // this API will return errors messages
            }
        }
    }
    // exercise the code      Note the typing here...
    fetchEmployees().then( (d:Array<Employee>)=>{ // .then will resolve the promise
        console.log(`${typeof(d)}`)
        console.log(`promise returned ${d}`)
        console.log(`Member zero is ${d[0].employee_name}`) // if we did not data type, we woudl need to use [''] notation
        let monitor:HTMLElement = document.getElementById('monitor')
        monitor.innerHTML = JSON.stringify(d)
    } )

}