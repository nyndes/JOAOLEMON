//Declarando Variáveis
var btnContact = document.querySelector(".jl-btn-contact");
var toggleModal = document.querySelectorAll(".jl-toggle-modal");
var roladinha = document.querySelector(".jl-scroll-down img");
var xauLemon = document.querySelector("#jl-home-presentation");
var rolada = document.querySelector(".jl-scroll-down");
var oiEnd = document.querySelector(".jl-end-home-presentation");

//Page Preloader
window.addEventListener("load", function () {
  var pagePreloader = document.querySelector(".jl-preloader");
  pagePreloader.classList.add("jl-fade-out");

  setTimeout(function () {
    pagePreloader.style.display = "none";
  }, 2000);
});

//Abrindo e fechando informações de contato
btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".jl-contact-info");
  boxContact.classList.toggle("jl-is-open");
  this.classList.toggle("jl-change-icon");
});

//abrindo e fechando o modal de orçamento

for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    var overlay = document.querySelector(".jl-overlay");
    var modalOrcamento = document.querySelector("#jl-modal-orcamento");

    overlay.classList.toggle("jl-is-open");
    overlay.classList.toggle("jl-fade-in");
    modalOrcamento.classList.toggle("jl-is-open");
    modalOrcamento.classList.toggle("jl-slide-top-in");
  });
}

// Animando Elementos on Scroll com Waypoints

/**- (1) dar um console.log quando o usuario dar um scroll
window.addEventListener("scroll", () => {
  console.log("Roladinha ON");
});**/

window.addEventListener("scroll", () => {
  roladinha.style.opacity = 8 / window.scrollY;
  xauLemon.style.opacity = 80 / window.scrollY;
  oiEnd.style.opacity = 8 * window.scrollY;

  //usando Conditional (ternary) operator
  rolada.style.display = roladinha.style.opacity < 0.08 ? "none" : "block";

  /** Minha tentativa
  if (roladinha.style.opacity < 0.08) {
    roladinha.style.display = "none";
  } else if (roladinha.style.opacity > 0.08) {
    roladinha.style.display = "block";
  }**/
});
