const test = document.querySelector('#test');
let time1;
let time2;

document.addEventListener('keydown', (event) => {
    console.log(event);
});

document.addEventListener('keyup', (event) => {
    test.innerHTML = test.innerHTML + "0";
});