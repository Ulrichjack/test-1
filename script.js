// Tableau des images disponibles
const images = ["img/plantain.jpg", "img/fruit2.jpg", "img/piment.jpg"];

// Fonction pour changer l'image en fonction de l'index du bouton
function changeImageTo(index) {
    // Mettre à jour l'image principale
    const image = document.getElementById("dynamic-img");
    image.src = images[index];

    // Mettre à jour l'état actif des boutons
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// Initialiser l'état actif (première image par défaut)
document.addEventListener("DOMContentLoaded", () => {
    changeImageTo(0); // Active le premier bouton et affiche la première image
});
