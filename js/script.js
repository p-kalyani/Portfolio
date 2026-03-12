const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".main-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.clientHeight;

if (scrollY >= sectionTop) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});
/* Mobile toggle */

function toggleMenu(){

const menu=document.querySelector(".links");

menu.classList.toggle("active");

}

const navMenu = document.querySelector(".links");
const navItems = document.querySelectorAll(".main-links a");

navItems.forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});

/* Hero Sec Typing */

const text=[
"Java Full Stack Developer",
"Frontend Developer",
"Building Scalable Enterprise Applications"
];

let count=0;
let index=0;
let currentText="";
let letter="";

function type(){

if(count===text.length){
count=0;
}

currentText=text[count];

letter=currentText.slice(0,++index);

document.getElementById("typing").textContent=letter;

if(letter.length===currentText.length){

count++
index=0

setTimeout(type,1000);

}else{

setTimeout(type,70);

}

}

type();


//Canvas Particles
const canvas = document.querySelector(".particles");
const ctx = canvas.getContext("2d");

// Function to resize canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Create particles
let particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34,197,94,0.7)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animate);
}
animate();

/* Initialize EmailJS */
(function(){
    emailjs.init("oiMD98aFoPR78pFi6"); 
})();


/* Contact Form */
const form = document.getElementById("contactForm");
const btn = document.getElementById("submitBtn");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

e.preventDefault();

btn.innerText = "Sending...";
btn.disabled = true;

emailjs.sendForm(
"service_vqvjnsj",
"template_cemo4dh",
this
)

.then(function(){

message.innerText = "Message sent successfully!";
message.className = "success";

setTimeout(() => {
    message.innerText = "";
}, 4000);

form.reset();

btn.innerText = "Send Message";
btn.disabled = false;

},

function(error){

message.innerText = "Failed to send message. Please try again.";
message.className = "error";

setTimeout(() => {
    message.innerText = "";
}, 4000);

btn.innerText = "Send Message";
btn.disabled = false;

});

});

// fade-in sec smooth slideup
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){

entries.forEach(entry => {

if(!entry.isIntersecting) return;

entry.target.classList.add("show");
observer.unobserve(entry.target);

});

}, appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
});

