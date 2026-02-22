// État initial des jetons
let jetons = {
    force: 0,
    faim: 0,
    intelligence: 0,
    vitalite: 0,
    feu: false,
    lanceReparee: false
};

// Mettre à jour l'affichage des jetons
function afficherJetons() {
    document.getElementById("force").textContent = jetons.force;
    document.getElementById("faim").textContent = jetons.faim;
    document.getElementById("intelligence").textContent = jetons.intelligence;
    document.getElementById("vitalite").textContent = jetons.vitalite;
    document.getElementById("feu").textContent = jetons.feu ? "Feu: Oui" : "Feu: Non";
    document.getElementById("lance").textContent = jetons.lanceReparee ? "Lance réparée: Oui" : "Lance réparée: Non";
}

// Fonction pour la situation du lapin
function choixLapin(choix) {
    if (choix === 1) {
        jetons.faim += 1;
        jetons.force -= 1;
        jetons.vitalite -= 1;
    } else if (choix === 2) {
        jetons.faim -= 1;
    }
    afficherJetons();
    situationOrage(); // Passer à la situation suivante
}

// Fonction pour la situation de l'orage (à compléter)
function situationOrage() {
    const situation = document.getElementById("situation");
    situation.innerHTML = `
        <img id="situation-image" src="images/grotte.jpg" alt="Grotte pendant l'orage">
        <p>Un terrible orage éclate. Vous vous mettez à l'abri dans une grotte. Un éclair frappe un arbre près de vous.</p>
        <div class="choices">
            <button onclick="choixOrage(1)">Prendre la branche enflammée</button>
            <button onclick="choixOrage(2)">Laisser la branche et explorer la grotte</button>
        </div>
    `;
}

// Fonction pour les choix de l'orage (à compléter)
function choixOrage(choix) {
    if (choix === 1) {
        jetons.feu = true;
        jetons.intelligence += 1;
        jetons.vitalite += 1;
        jetons.force += 1;
        jetons.faim -= 1;
    } else if (choix === 2) {
        jetons.faim += 1;
        jetons.vitalite -= 1;
        jetons.force -= 1;
    }
    afficherJetons();
    // Passer à la situation suivante
}

// Initialisation
afficherJetons();
// Sauvegarde les scores dans localStorage
localStorage.setItem('forceScore', document.getElementById("forceScore").textContent);
localStorage.setItem('faimScore', document.getElementById("faimScore").textContent);
localStorage.setItem('intelligenceScore', document.getElementById("intelligenceScore").textContent);
localStorage.setItem('vitaliteScore', document.getElementById("vitaliteScore").textContent);

function checkGameOver() {
    const force = parseInt(document.getElementById("forceScore").textContent);
    const faim = parseInt(document.getElementById("faimScore").textContent);
    const vitalite = parseInt(document.getElementById("vitaliteScore").textContent);

    if (force <= 0 || faim <= 0 || vitalite <= 0) {
        const slideContainer = document.querySelector('.slide-container');
        slideContainer.innerHTML = `
            <div style="text-align: center;">
                <h1 style="color: #d4af37;">Tu es mort !!!</h1>
                <img src="images/mort_force.jpg" alt="Game Over" style="max-width: 300px; margin: 20px auto; display: block; border: 2px solid #d4af37; border-radius: 10px; background-color: rgba(89, 61, 31, 0.3); padding: 10px;">
                <button class="choice-button" onclick="window.location.href='slide4.html'">
                    Recommencer
                </button>
            </div>
        `;
    }
}