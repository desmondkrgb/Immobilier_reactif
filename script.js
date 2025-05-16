let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateCarousel() {
  const carousel = document.getElementById('carousel');
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

    document.querySelectorAll('.filtres select').forEach(select => {
      select.addEventListener('change', filtrerBiens);
    });
    
    function filtrerBiens() {
      const lieu = document.getElementById('filtre-lieu').value;
      const type = document.getElementById('filtre-type').value;
      const prix = document.getElementById('filtre-prix').value;
    
      const cartes = document.querySelectorAll('.carte');
    
      cartes.forEach(carte => {
        const carteLieu = carte.getAttribute('data-lieu');
        const carteType = carte.getAttribute('data-type');
        const cartePrix = parseInt(carte.getAttribute('data-prix'));
    
        let prixOK = true;
        if (prix === "0-100000") prixOK = cartePrix <= 100000;
        else if (prix === "100000-300000") prixOK = cartePrix > 100000 && cartePrix <= 300000;
        else if (prix === "300000+") prixOK = cartePrix > 300000;
    
        const lieuOK = !lieu || carteLieu === lieu;
        const typeOK = !type || carteType === type;
    
        if (lieuOK && typeOK && prixOK) {
          carte.style.display = "block";
        } else {
          carte.style.display = "none";
        }
      });
    }
   

        function ajoutAvis() {
          const nom = document.getElementById("nom").value.trim();
          const msg = document.getElementById("msg").value.trim();
          const note = document.getElementById("note").value;
          if (!nom || !msg) return;
        
          const card = document.createElement("div");
          card.className = "avis-card";
          card.innerHTML = `
            <img src="Assets/IMAGE/pexels-photo-396303.jpeg}" class="avatar">
            <h3>${nom}</h3>
            <div class="etoiles">${note}</div>
            <p class="com">${msg}</p>
          `;
          document.getElementById("avis-box").prepend(card);
        
          document.getElementById("nom").value = "";
          document.getElementById("msg").value = "";
          document.getElementById("note").value = "⭐⭐⭐⭐⭐";
        }


function openNav(){
document.getElementById("mysidebar").style.width="100vw"
document.querySelector("body").style.overflow="hidden"

}

function ferme(){
document.getElementById("mysidebar").style.width="0"
document.querySelector("body").style.overflow="auto"

}

let popup=document.getElementById("popup");
function ouvrir(){
popup.style.display="flex";
}
function fermes(){
popup.style.display="none";
}