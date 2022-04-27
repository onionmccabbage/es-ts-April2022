// a simple adding calculator
const init = () => {
    const form = document.querySelector('button'); // ! ensures the value is not null
    form.addEventListener('click', submitHandler);
};
const submitHandler = (e) => {
    e.preventDefault(); // we do not want the fom to submit!!!!
    console.log(e.target);
    const a = document.querySelector("input[name='a']");
    const b = document.querySelector("input[name='b']");
    const result = add(Number(a.value), Number(b.value));
    const resultElement = document.querySelector('p');
    if (resultElement) {
        resultElement.textContent = result.toString();
    }
};
const add = (a, b) => {
    return a + b;
};
// immediate code
init();
