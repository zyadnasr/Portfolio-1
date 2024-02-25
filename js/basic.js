const titleTag = document.title;
window.addEventListener("blur", ()=>{
    document.title = "good bye";
});
window.addEventListener("focus", ()=>{
    document.title = titleTag;
});
var options = {
    strings: ['Frontend Developer', 'Web Developer', 'Analyzer'], // Array of strings to display
    typeSpeed: 50, // Typing speed in milliseconds
    backSpeed: 50, // Backspacing speed in milliseconds
    backDelay: 1000, // Time before backspacing starts
    loop: true // Loop typing continuously
};
var typed = new Typed('#typed', options);
const sections = document.querySelectorAll('.section');
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function animateSections() {
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('animate');
        }
    });
}
window.addEventListener('scroll', animateSections);
animateSections();

const services = document.querySelector('.services-collector');
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function animateServices() {
    const service = document.querySelector('.service');
    if (isInViewport(service)) {
        service.classList.add('active');
    }
}
window.addEventListener('scroll', animateServices);
animateServices();
const spliterContainer = document.querySelectorAll('.spliter-container');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function animatespliters() {
    spliterContainer.forEach(spliter => {
        if (isInViewport(spliter)) {
            spliter.classList.add('active');
        }
    })
}
window.addEventListener('scroll', animatespliters);
animatespliters();

const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
    toggle.classList.toggle('clicked');
    if (toggle.classList.contains("clicked")) {
        document.getElementById("menu").style.display = "flex";
    } else {
        document.getElementById("menu").style.display = "none";
    }
});
const handleResize = () => {
    if (window.innerWidth > 768 && toggle.classList.contains("clicked")) {
        document.getElementById("menu").style.display = "none";
        toggle.classList.remove("clicked");
    }
};
window.addEventListener("resize", handleResize);