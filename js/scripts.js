// Seleção de elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

 // scroll de links para seções
const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");   
const allLinks = [...desktopLinks, ...mobileLinks];

// slides
const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

// Funções
// função de scroll
function smoothScroll(e){
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  setTimeout(() =>{

    if(menu.classList.contains("menu-active")){
      menu.classList.remove("menu-active");
    }
  }, 500)
};

// slides
function showSlides(){
  for(let i = 0; i < slides.length; i++){
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  };

  slideIndex++

  if(slideIndex > slides.length){
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active")
  dots[slideIndex - 1].classList.add("active")

  setTimeout(showSlides, 3000);
};


// Eventos
// Evento de fechar e abrir menu mobile
[menuBtn, closeMenuBtn].forEach((btn) =>{
  btn.addEventListener("click", (e) =>{
    menu.classList.toggle("menu-active");
  });
});

// Barra de rolagem para a section
allLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll)
});

// eventos do slide
// inicialização
showSlides()
