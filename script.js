/*----------------- Toggle icon navbar  ------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*----------------- scroll icon navbar  ------------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    /*----------------- sticky navbar  ------------------*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*----------------- remove Toggle icon and navbar  ------------------*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/* --------scroll reveal------------------ */

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-cntainer, portfolio-box, .contact form', {origin: 'button'});
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'top' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

 /*----------typed JS --------*/

 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


<script src="https://smtpjs.com/v3/smtp.js">
</script>

function send(){
    console.log("hi")

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "suraj411pal@gmail.com",
        Password : "E297B494CF189102DE3DB4DA9CF92B85B2C8",
        To : 'them@website.com',
        From : "suraj411pal@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}