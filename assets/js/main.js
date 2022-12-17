const darkMode = document.querySelector(".dark-mode"),
moon = document.querySelector(".moon"),
body = document.querySelector("body"),
navBar = document.querySelector(".nav"),
btnUp = document.querySelector(".button-UP");


/*============== Dark / Light ============== */

darkMode.addEventListener("click", () =>{
    if(moon.classList.replace('uil-sun','uil-moon' )){
        moon.classList.replace('uil-sun','uil-moon' )


    }else{
        moon.classList.replace('uil-moon', 'uil-sun')

    }
    body.classList.toggle("dark");
})

/*============== Scroll Up btn ============== */

window.addEventListener(("scroll"),()=>{
    if(window.pageYOffset > 250){
        btnUp.classList.add("add")
    }else{
        btnUp.classList.remove("add")
    }
})

/*============== Email js ============== */

const contactForm = document.querySelector(".contact__contact-form"),
contactName = document.querySelector(".user-name"),
contactEmail = document.querySelector(".email"),
contactMessage = document.querySelector(".textarea"),
submitBtn = document.querySelector(".submit-btn"),
showMessage = document.querySelector(".warn");

const sendEmail = (e) =>{
    e.preventDefault()
    
    if(contactName.value === "" || contactEmail.value === "" || contactMessage.value === ""){
        showMessage.classList.remove("color-green");
        showMessage.classList.add("color-red")
        showMessage.textContent = "Write all the input fields"
    }else{
        // sevive id, template, #form, public key;
        emailjs.sendForm("service_jem8z2d", "template_tb6nv0r", "#form", "TCtPn4FDCfmu6FgF5")
        .then(() => {
            showMessage.classList.add("color-green");
            showMessage.textContent = "Message sent ✅"
            
            setTimeout(()=>{
                showMessage.textContent = ""
            }, 5000)
        }, (error) =>{
            alert("OOPS! please try again...")
        })
    }

}

contactForm.addEventListener("submit", sendEmail);

/*============== Scroll Reveal animation ============== */

const animate = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: false,
})

animate.reveal(`.home__image`, {delay:400, origin: "right", interval:100})
animate.reveal(`.home__title`, {delay:400, origin: "left", interval: 100})
animate.reveal(`.skill`, {delay:500, origin: "top", interval: 100})
animate.reveal(`.project`, {delay:500, origin: "top", interval: 100})