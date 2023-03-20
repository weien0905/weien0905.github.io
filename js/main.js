const typing = document.querySelector('#typing-text');
const intro = document.querySelector('#intro');

typing.addEventListener('animationend', () => {
    intro.style.animationPlayState = 'running';
})