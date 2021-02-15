// Sélection de l'élément du panier du header
var votrePanier = document.querySelectorAll('p')[1];

// Déclaration des fonctions
function animationPanier1(){
  votrePanier.style.color = "#fd1015";
  votrePanier.style.cursor = "pointer";
}

function animationPanier2(){
  votrePanier.style.color = "";
}

function animationPanier3(){
  document.getElementById("panier_achat").animate([
  // keyframes
    {transform: 'scale3d(1, 1, 1)'},
    {transform: 'scale3d(1.01, 0.99, 1)'},
    {transform: 'scale3d(0.99, 1.01, 1)'},
    {transform: 'scale3d(1, 1, 1)'}
], { 
  // options
  duration: 1000,
});
}

//Evenements sur le panier du header
votrePanier.addEventListener('mouseover', animationPanier1);
votrePanier.addEventListener('mouseout', animationPanier2);
votrePanier.addEventListener('click', animationPanier3);


/*Animation de l'accordeon*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } 
      else {
          panel.style.display = "block";
      }
    });
}


