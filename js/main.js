const typing = document.querySelector('#typing-text');
const intro = document.querySelector('#intro');
const sections = document.querySelectorAll('section');
const navitems = document.querySelectorAll('nav ul li');
const projects = document.querySelectorAll('.hidden-project');
const descriptions = document.querySelectorAll('.hidden-description');
const logos = document.querySelectorAll('.hidden-logo');

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

const project_observer = new IntersectionObserver(async (entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            entries[i].target.classList.add('show-project');     
            await new Promise(r => setTimeout(r, 200));   
        }
        
    }
})

const description_observer = new IntersectionObserver(async (entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {  
            entries[i].target.classList.add('show-description');     
            await new Promise(r => setTimeout(r, 500));   
        }
        
    }
})

const logo_observer = new IntersectionObserver(async (entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {           
            entries[i].target.classList.add('show-logo');      
            await new Promise(r => setTimeout(r, 300));  
        }
        
    }
})

projects.forEach(project => project_observer.observe(project));
descriptions.forEach(description => description_observer.observe(description));
logos.forEach(logo => logo_observer.observe(logo));

fetch("https://limweien.pythonanywhere.com/ping");