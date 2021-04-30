const button = document.querySelector('.listen');

const Recognition = new webkitSpeechRecognition();
Recognition.lang = 'ko-KR';

const resultBox = document.querySelector('input');
const wrapper = document.querySelector('.wrapper');
const copy = document.querySelector('.copy');
const errorBox = document.querySelector('.error');
const returnButton = document.querySelector('.return');

const handleButton = (e) => {
    e.target.innerText = "Listening...";
    e.target.classList.add("listening");
    Recognition.start();
}

const hideButton = () => {
    button.className = "hidden";
    wrapper.classList.add('result');
}

const showText = (e) => {
    resultBox.value = e.results[0][0].transcript;
    copy.classList.add('show');
    resultBox.classList.add('show');
    returnButton.classList.add("show");
}

const showError = (e) => {
    errorBox.innerText = e.error;
    returnButton.classList.add("show");
}

const copyText = (e) => {
    resultBox.select();
    document.execCommand("copy");
    e.target.innerText = "COPIED";
}

button.addEventListener('click', handleButton);

Recognition.addEventListener('audioend', hideButton);
Recognition.addEventListener('result', showText);
Recognition.addEventListener('error', showError);

copy.addEventListener('click', copyText);

returnButton.addEventListener('click', () => window.location.reload() );