const saisiePrenom = document.getElementById('saisiePrenom');
const ajoutPrenom = document.getElementById('ajoutPrenom');
const listePrenom = document.getElementById('listePrenom');

ajoutPrenom.addEventListener('click', function (event) {
    console.log(saisiePrenom.nodeValue);
});