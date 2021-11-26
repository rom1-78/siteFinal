// Fonction qui se lance au chargement de la page
function onload() {
    // Date de la facture (maj auto)
    document.getElementById('date').value=formatDate(Date.now());
}
// Fonction qui permet de convertir la chaine de caractère de base de Date.now() en quelque chose de plus présentable.
function formatDate(date) {
    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    return [day, month, year].join('/');
}
// DEBUT DE LA PARTIE A MODIFIER
// Fonction qui dépend du bouton "Calculer"
function calculate() {
    
    var total = 0;

    var listePrix = document.getElementsByClassName("prix");
    var listeQte = document.getElementsByClassName("qte");
    var listeTtl = document.getElementsByClassName("totalLigne");

    for (var i = 0; i < listePrix.length; i++) {
        listeTtl[i].value = parseInt(listeQte[i].value) * parseInt(listePrix[i].value);
        total += parseInt(listeTtl[i].value);
    }

    // Remise
    const remise = parseFloat(document.getElementById('r1').value);
    // Sous-Total
    const sousTotal = parseInt(document.getElementById('st1').value=total);
    // Sous-Total sans les remises
    const sT_r = parseFloat(document.getElementById('st_r1').value=sousTotal-sousTotal*(remise/100.0));
    // Taux d'impots
    const tauxImpots = parseFloat(document.getElementById('ti1').value);
    // Taxe totale
    const totalTaxe = parseFloat(document.getElementById('tt1').value=Math.round(sousTotal*tauxImpots)/100.0);
    // Frais exp
    const fraisexp = parseFloat(document.getElementById('e_m1').value)
    // Solde
    const solde = parseFloat(document.getElementById('solde').value=sT_r+totalTaxe+fraisexp);
    
}

function ajouterLigne() {
    var newLi = document.getElementById("modeleLigne").cloneNode(true);
    var lastLi = document.getElementById("lastLigne");

    var pere = document.getElementById("table_inv").firstChild.nextSibling;
    pere.insertBefore(newLi, lastLi);
}

function remplir() {
    const tabDesc = new Array("Smartphone", "Bureau", "Ram 16Go", "Clé USB 32Go", "Souris", "Ecran 17\"");

    var listePrix = document.getElementsByClassName("prix");
    var listeQte = document.getElementsByClassName("qte");
    var listeDesc = document.getElementsByClassName("desc");

    for (var i = 0; i < listeDesc.length; i++) {
        var idesc = Math.floor(tabDesc.length * Math.random());
        listeDesc[i].value = tabDesc[idesc];

        var qte = Math.floor(10 * Math.random() + 1);
        listeQte[i].value = qte;

        var prix = Math.floor(100 * Math.random() + 1);
        listePrix[i].value = prix;
    }
}