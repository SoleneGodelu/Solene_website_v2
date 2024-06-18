const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.querySelector(".form"); // Utilisation de querySelector pour plus de clarté
const error = document.getElementById("error");
const success = document.getElementById("success");

function validateEmail(email) {
    const re =
        /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    error.innerHTML = ""; // Réinitialisation du message d'erreur
    success.innerHTML = ""; // Réinitialisation du message de succès
    let isError = false;

    // Réinitialisation des styles
    [name, email, subject, message].forEach((field) => {
        field.style.borderColor = "#ddd";
    });

    // Validation des champs
    [name, email, subject, message].forEach((field) => {
        if (!field.value) {
            error.innerHTML += `<p>Votre ${field.getAttribute(
                "name"
            )} est requis !</p>`;
            field.style.borderColor = "red";
            isError = true;
        }
    });

    // Validation supplémentaire pour l'email
    if (email.value && !validateEmail(email.value)) {
        error.innerHTML += "<p>Veuillez entrer une adresse email valide.</p>";
        email.style.borderColor = "red";
        isError = true;
    }

    if (isError) {
        error.style.color = "red"; // Affichage des messages d'erreur en rouge
        return;
    }

    // Préparation et envoi de l'email
    let ebody = `
    <b>Ceci est un message du formulaire sur le site solene-godelu.com</b>
    <br>
    <br>
    <b>Nom : </b>${name.value}
    <br>      
    <br>
    <b>Mail : </b>${email.value}
    <br>
    <br>
    <b>Sujet : </b>${subject.value}
    <br>
    <br>
    <b>Message : </b>${message.value}
    <br>
    `;

    Email.send({
        SecureToken: "32ab13d4-09e8-4cd6-9750-a61b183dce82",
        To: "solene.godelu@hotmail.com",
        From: "solene.godelu@hotmail.com",
        Subject: "Mail from " + email.value,
        Body: ebody,
    })
        .then(() => {
            // Gestion de la réussite de l'envoi
            [name, email, subject, message].forEach((field) => {
                field.value = ""; // Nettoyage des champs
            });
            success.innerHTML =
                "Merci pour votre message, je reviendrai vers vous sous 48h."; // Affichage du message de succès
            success.style.color = "green"; // Affichage du message de succès en vert
        })
        .catch((error) => {
            // Gestion des erreurs d'envoi
            error.innerHTML = "Erreur lors de l'envoi. Veuillez réessayer.";
            error.style.color = "red"; // Affichage des erreurs en rouge
        });
});
