/************************Toggle icon navbar******************************/
let menuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*********************************scroll section active link************************************* */

let sections= document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<height+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

    /*****************************sticky navbar***************************/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    /*****************************remove toggle icon and navbar***************************************/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*********************************scroll reveal*********************************************/
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading',{orgin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'button'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

/************************************typed js*************************************** */
/*const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer', 'Technical Documentation', 'Testing & Quality Assurance'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});*/


/***********************Contact form submission************************** */
emailjs.init("4QMoQW4DzZ_fS83Fm");

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    emailjs.send("service_mbh9egf", "template_g729cdj", {
        name: name,
        email: email,
        mobile: mobile,
        subject: subject,
        message: message
    })
    .then(function(response) {
        alert("Message sent successfully!");
        form.reset();  // Reset the form after sending the message
    }, function(error) {
        alert("Failed to send message, please try again.");
    });
});
