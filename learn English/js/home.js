const text = "سلام! قراره با هم انگلیسی یاد بگیریم. آماده ای؟"
const words = text.split(" ");
const animated = document.getElementById('animated-p');

const btn_start = document.querySelector('.btn-start');
const Div_test_1 = document.querySelector('.test-1');
const Start = document.querySelector('.start');

const btn_next_1 = document.querySelector('.btn-n');
const test_1 = document.querySelector('.test-1');
const buttons = document.querySelectorAll('.ask');


const message = document.querySelector('#message');
const ask_true = document.querySelector('.ask-true');
const ask_true2 = document.querySelector('.ask-true2');
const ask_true3 = document.querySelector('.ask-true3');
const ask_true4 = document.querySelector('.ask-true4');
const ask_true5 = document.querySelector('.ask-true5');

const message_true = document.querySelector('#message-True');
const message_false = document.querySelector('#message-False');
const message_equal = document.querySelector('#message-equal');



const ask1 = document.querySelector('.total-task-1')


const Div_test_2 = document.querySelector('.test-2');

const Div_test_3 = document.querySelector('.test-3');

const Div_test_4 = document.querySelector('.test-4');

const Div_test_5 = document.querySelector('.test-5');

const container = document.querySelector('.container')

let index = 0;

function typeWord() {
    if (index < words.length) {
        animated.innerHTML += words[index] + " ";
        index++;
        setTimeout(typeWord, 300);
    }
}

typeWord();

btn_start.addEventListener('click', function() {
    Div_test_1.style.display = "block";
    Start.style.display = "none";
    counter.style.display = "block";
    counter2.style.display = "block";
});

let count2 = 0;

ask_true.addEventListener('click', function() {
    ask1.style.display = 'none'
    alert('آفرین, درست بود!!');
    Div_test_2.style.display = 'block';
    count2++;
    counter2.innerText = " امتیاز مثبت: " + count2;
}, 2000);

ask_true2.addEventListener('click', function() {
    Div_test_2.style.display = 'none'
    alert('عالی!!');
    Div_test_3.style.display = 'block';
    count2++;
    counter2.innerText = " امتیاز مثبت: " + count2;
}, 2000);

ask_true3.addEventListener('click', function() {
    Div_test_3.style.display = 'none'
    alert('ایوللل!!!');
    Div_test_4.style.display = 'block';
    count2++;
    counter2.innerText = " امتیاز مثبت: " + count2;
}, 2000);


ask_true4.addEventListener('click', function() {
    Div_test_4.style.display = 'none'
    alert(' عالی بود!!!!!');
    Div_test_5.style.display = 'block';
    count2++;
    counter2.innerText = " امتیاز مثبت: " + count2;
}, 2000);


ask_true5.addEventListener('click', function() {
    Div_test_5.style.display = 'none'
    alert(' عالییی!!!');
    count2++;
    counter2.innerText = " امتیاز مثبت: " + count2;
    if (count2 > count) {
        message_true.style.display = "block";
        container.style.border = "5px solid #1e7145";
    } else if (count2 < count) {
        message_false.style.display = "block";
        container.style.border = "5px solid #b91d47";
    } else {
        message_equal.style.display = "block";
        
    }



}, 2000);

const counter = document.getElementById('counter');
const counter2 = document.getElementById('counter2');

let count = 0;


buttons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        buttons.classList.add('red-border');
        count++;
        counter.innerText = " امتیاز منفی: " + count;
        setTimeout(() => {
            alert("غلط بود, دوباره امتحان کن.");
        }, 500);
        
    });
});




setTimeout(() => {
    const delayBtn = document.querySelector('.btn-start');
    delayBtn.style.display = 'block';
}, 3000);







