document.addEventListener("DOMContentLoaded", function () {
    var scrollTopButton = document.querySelector(".scroll-top");

    // Fonction pour gérer l'affichage de la flèche
    function handleScrollTopButtonDisplay() {
        if (window.innerWidth > 1280) {
            // Affiche la flèche seulement sur les écrans plus larges que 768px
            if (window.pageYOffset > 100) {
                scrollTopButton.style.display = "block";
            } else {
                scrollTopButton.style.display = "none";
            }
        } else {
            scrollTopButton.style.display = "none"; // Masque la flèche sur les petits écrans
        }
    }

    // Montrer ou cacher la flèche lors du scroll
    window.onscroll = handleScrollTopButtonDisplay;

    // Montrer ou cacher la flèche lors du redimensionnement de la fenêtre
    window.onresize = handleScrollTopButtonDisplay;

    // Initialiser l'affichage de la flèche au chargement de la page
    handleScrollTopButtonDisplay();

    // Fonction pour remonter en haut de la page lors du clic
    scrollTopButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
