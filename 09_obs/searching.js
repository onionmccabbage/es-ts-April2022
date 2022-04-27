// import Rx from './Rx.js';
// NB this ts must be made into a js for this to work!!
// where possible, let Typescript infer the type
const testData = ['people', 'planets', 'species', 'vehicles', 'starships'];
const searchBox = document.querySelector('#search'); // -> 'input'
const results = document.querySelector('#results'); // -> 'ul'
// e.g. 'hello' is boolean true !'hello' is bolean false 
const notEmpty = (input) => input && input.trim().length > 0;
// make a request
const sendRequst = (arr, query) => {
    return arr.filter((item) => {
        return query.length > 0 && item.startsWith(query);
    });
};
const appendResults = (container, results) => {
    for (const result of results) {
        const li = document.createElement('li');
        const text = document.createTextNode(result);
        li.appendChild(text);
        container.appendChild(li);
    }
};
const cleanUpUtil = (container) => {
    while (container.childElementCount > 0) {
        container.removeChild(container.firstChild);
    }
};
// we need an observable - here we convert the key event to an observable
Rx.Observable.fromEvent(searchBox, 'keyup')
    .pluck('target', 'value') // grab them fro mthe event and add them to the obvservable stream
    .filter(notEmpty) // check there is actually some content in the search field
    .do((query) => { console.log(`Querying for ${query}`); })
    .map((query) => { return sendRequst(testData, query); })
    .forEach((result) => {
    cleanUpUtil(results);
    appendResults(results, result);
});
