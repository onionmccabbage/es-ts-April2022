import * as Rx from 'rxjs'
const cat:HTMLElement = document.getElementById('cat')
// observables are for streams of data
// by convention observables are appended with $
const keyup$ = Rx.Observable.fromEvent(document, 'keyup') // listen for ANY keyup event
// the observable is not created until it is observed
keyup$
    .do( ()=>{console.log('early')} )
    .pluck('keyCode') // we now have the code of whatever key was pressed
    .do( ()=>{console.log('late')} )
    .subscribe( (keyCode:number)=>{ /// this call-back will be called for EVERY item in the observable
        const k = String.fromCharCode(keyCode)
        console.log(`User typed ${k}`)
        cat.innerHTML += k // never ending set of characters!!
    } )

// here's our code from this morning
// the following gives a prompt for entered search terms
const categories:string[] = ['people', 'planets', 'species', 'starships', 'vehicles']
const searchBox = document.querySelector('#search'); //-> <input>
const results:HTMLElement = document.querySelector('#results');  //-> <ul>
const notEmpty = (input: any) => !!input && input.trim().length > 0;
const sendRequest = (arr: any, query: any) => {
    return arr.filter((item: any) => {
        return query.length > 0 && item.startsWith(query);
    })
}
Rx.Observable.fromEvent(searchBox, 'keyup')
    .debounceTime(700) // give the user 700 ms between checks
    .pluck('target', 'value')
    .filter(notEmpty)
    .do(query => console.log(`Querying for ${query}...`))
    // .map(query => sendRequest(testData, query))
    .map(query => sendRequest(categories, query))
    .forEach(result => {
        clearResults(results)
        appendResults(result, results)
    })
const clearResults = (container: HTMLElement) => {
    while (container.childElementCount > 0) {
        container.removeChild(container.firstChild);
    }
}
const appendResults = (results: string, container: HTMLElement) => {
    for (const result of results) {
        const li = document.createElement('li')
        const text = document.createTextNode(result)
        li.appendChild(text)
        container.appendChild(li)
    }
}


// 'hot' observables only provide new subscribers with new content (the default)
// 'cold' observables provide new subscribers with everyhthing already passed (like AJAX)
// keyup$.subscribe()