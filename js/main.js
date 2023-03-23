const typing = document.querySelector('#typing-text');
const intro = document.querySelector('#intro');
const sections = document.querySelectorAll('section');
const navitems = document.querySelectorAll('nav ul li');

const setActiveSection = () => {
    {
        let curr;
        sections.forEach(section => {
            if (scrollY >= section.offsetTop + 56) {
                curr = section.getAttribute('id');
            } 
        })
        // If scroll to the end, make the last section active
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            curr = navitems[navitems.length - 1].querySelector('a').getAttribute('href').slice(1);
        }
        navitems.forEach(item => {
            item.classList.remove('active');
            if(item.querySelector('a').getAttribute('href').slice(1) == curr) {
                item.classList.add('active');
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', setActiveSection);
window.addEventListener('scroll', setActiveSection);
typing.addEventListener('animationend', () => {
    intro.style.animationPlayState = 'running';
})