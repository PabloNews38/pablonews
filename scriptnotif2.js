const notifications = document.querySelector(".notifications"),
      buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
    warning: {
        icon: 'fa-triangle-exclamation',
        text: "Attention: Une connexion à un compte Google est nécessaire pour envoyer vos articles via votre espace membre",
    },
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
}

const createToast = (id) => {
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

const initToasts = () => {
    // Ajouter une fonction pour créer chaque toast au chargement de la page
    createToast("warning");
}

// Ajouter un écouteur d'événement au chargement de la page pour initialiser les toasts
document.addEventListener("DOMContentLoaded", initToasts);

// Ajouter un écouteur d'événement à chaque bouton pour créer un toast lorsqu'il est cliqué
buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});
