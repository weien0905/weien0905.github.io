const typing = document.querySelector('#typing-text');
const intro = document.querySelector('#intro');
const sections = document.querySelectorAll('section');
const navitems = document.querySelectorAll('nav ul li');
const projects = document.querySelectorAll('.hidden-div');

const setActiveSection = () => {
    {
        let curr;
        let top = sections[0].offsetTop;
        sections.forEach(section => {
            if (scrollY >= section.offsetTop - top) {
                curr = section.getAttribute('id');
            } 
        })
        // If scroll to the end, make the last section active
        if (window.innerHeight + window.scrollY + 2 >= document.body.offsetHeight) {
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

const observer = new IntersectionObserver(async (entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            await new Promise(r => setTimeout(r, 200));
            entries[i].target.classList.add('show-div');        
        }
        
    }
})

projects.forEach(project => observer.observe(project));

