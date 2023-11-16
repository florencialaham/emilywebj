function suscribir() {
    let emailInput = document.getElementById("email");
    let email = emailInput.value;

    if (validateEmail(email)) {
        alert("Suscripción realizada al mail: " + email);
    } else {
        alert("Por favor, introduce un correo electrónico válido.");
    }
}

function validateEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}


function isVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


window.addEventListener('DOMContentLoaded', (ev0) => {
    
	window.addEventListener('scroll', (ev1) => {
               
		document.querySelectorAll(".paused").forEach(elm => {
			if (isVisible(elm))
				elm.classList.remove("paused"); 
		})
	});
});


    const videoBtn = document.querySelectorAll(".video-btn")
const video = document.getElementById('video');

videoBtn.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
      let srcVideo = e.target.dataset.videoSrc
      video.setAttribute("src",srcVideo)
  
    })
    
})

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});