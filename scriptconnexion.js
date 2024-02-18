// script.js

var users = {
    "xavier.fini": { "password": "X=DP!f", "redirect": "login=xavier-fini.html" },
    "lamia.gorgulu": { "password": "L=DG!g", "redirect": "login=lamia-gorgulu.html" },
    "hugo.combedargent": { "password": "H=DGDRE!c", "redirect": "login=hugo-combedargent.html" },
    "gabriel.holtzmann": { "password": "G=DR!h", "redirect": "login=gabriel-holtzmann.html" },
    "johan.gurung": { "password": "J=RC!g", "redirect": "login=johan-gurung.html" },
    "remi.mercier": { "password": "R=DGDR!m", "redirect": "login=remi-mercier.html" },
    "aziz.ba": { "password": "A=DCPE!b", "redirect": "login=aziz-ba.html" },
    "amine.boulkaila": { "password": "A=MV!b", "redirect": "login=amine-boulkaila.html" },
    "nicolas.intraluk": { "password": "N=I!i", "redirect": "login=nicolas-intraluk.html" },
    "alexi.david": { "password": "A=R!d", "redirect": "login=alexi-david.html" },
    "khadim.thioune": { "password": "K=R!t", "redirect": "login=khadim-thioune.html" },
    // Ajoutez d'autres utilisateurs au besoin
};

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (users.hasOwnProperty(username) && users[username].password === password) {
        // Rediriger l'utilisateur vers la page spécifiée dans l'objet users
        window.location.href = users[username].redirect;
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
}
