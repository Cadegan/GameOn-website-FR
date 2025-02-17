function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector('form');
const modalClose = document.querySelector(".close") //Création et chargement de la constante 'modalClose' et accès à la class .close du DOM
const modalSubmitClose = document.getElementById("submitClose")
const body = document.querySelector('body');
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
//Stockage des valeurs de champs dans des variables
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const birthdateInput = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateError")
const quantityTournois = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError")
const cgv = document.getElementById("checkbox1");
//Controle du format du mail
const emailAdress = document.getElementById("email");
const mailError = document.getElementById("mailError");
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

// launch modal form
function launchModal() {
  modalbg.style.display = "block"; //Affiche le questionnaire
  body.classList.add('no-scroll'); //on bloque le défilement vertical de la page principale qund le auestionnaire est ouvert
}

//Fermeture du questionnaire
modalClose.addEventListener('click', close); //Ecoute event clic de souris sur la constante modalClose qui cible la class .close, et une fonction est lancée

modalSubmitClose.addEventListener('click', close);

//Appel de la fonction 'close' pour cacher le formulaire et réinitialiser les entrées
function close() {
  modalbg.style.display = "none";  //Cache le questionnaire
  document.querySelector('.modal-body').style.display = 'block';
  document.querySelector('.message-validation').style.display = 'none';
  body.classList.remove('no-scroll'); //Réactive le défilement vertical
  clearInput();
}

const clearInput = () => {
  //Suppression de ce qui a pu etre entré
  form.reset();

  //Suppression des cadres rouges
  const resetErrorBorder = document.querySelectorAll('input')
  resetErrorBorder.forEach((element) => {
    element.classList.remove('errorForm');
  });

  //Suppression des messages d'erreur
  const resetErrorMessage = document.querySelectorAll('.result')
  resetErrorMessage.forEach((message) => {
    message.innerHTML = '';
  });
};

/* ou
modalClose.addEventListener('click', function () {
  modalbg.style.display = "none";
}); //Ecoute event clic de souris sur l'element close, nommé 'close' et on cache le formulaire
*/

//Controle d'entrée du prénom
function prenomValidation() {
  //Réinitialise les messages d'erreur
  firstError.innerHTML = ' ';
  firstError.classList.remove('errorStyle');
  first.classList.remove('errorForm');
  //Chaque fois que l'utilisateur saisit quelque chose
  //On vérifie la validité du champ prénom
  //Si rien n'est écrit ou s'il n'y a que des espaces
  if (firstName.value.trim().length == 0) {
    firstError.innerHTML = 'Réponse obligatoire!'; //ajout du message
    firstError.classList.add('errorStyle'); //ajout d'une class au message d'erreur
    first.classList.add('errorForm'); //ajout d'une class a la zone d'entrée
    return false;
    //s'il y a moins de 2 caracteres ou que des espaces
  } else if (firstName.value.trim().length < 2) {
    firstError.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    firstError.classList.add('errorStyle');
    first.classList.add('errorForm');
    return false;
    //si toutes les conditions sont remplies
  } else {
    firstError.innerHTML = ' ';
    return true;
  }
};

//Controle d'entrée du nom
function nomValidation() {
  //Réinitialise les messages d'erreur
  lastError.innerHTML = ' ';
  lastError.classList.remove('errorStyle')
  last.classList.remove('errorForm')
  // Chaque fois que l'utilisateur saisit quelque chose
  // on vérifie la validité du champ
  //si rien n'est écrit ou s'il n'y a que des espaces (.trim())
  if (lastName.value.trim().length == 0) {
    lastError.innerHTML = 'Réponse obligatoire!'; //ajout du message
    lastError.classList.add('errorStyle') //ajout d'une class au message d'erreur
    last.classList.add('errorForm') //ajout d'une class a la zone d'entrée
    return false
    //s'il y a moins de 2 caractères ou que des espaces
  } else if (lastName.value.trim().length < 2) {
    lastError.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    lastError.classList.add('errorStyle')
    last.classList.add('errorForm')
    return false
    //si toutes les conditions sont remplies
  } else {
    lastError.innerHTML = ' ';
    return true
  }
};

//Controle email
//Reinitialisation
function mailValidation() {
  mailError.innerHTML = '';
  mailError.classList.remove('errorStyle');
  email.classList.remove('errorForm');

  //Si rien n'a été indiqué
  if (emailAdress.value == "") {
    mailError.innerHTML = 'Entrez une adresse mail.';
    mailError.classList.add('errorStyle');
    email.classList.add('errorForm');
    return false;
    //Si la valeur du mail ne correspond pas au standard
  } else if (!emailAdress.value.match(mailRegex)) {
    mailError.innerHTML = 'Adresse mail invalide.';
    mailError.classList.add('errorStyle')
    email.classList.add('errorForm')
    return false;
  }

  else {
    mailError.innerHTML = '';
    return true;
  }
};

//Controle age
function birthdateValidation() {
  //var majorite = -567648000000;
  if (birthdateInput.value == "") {
    birthdateError.innerHTML = 'Vous devez entrer votre date de naissance.';
    birthdateError.classList.add('errorStyle')
    birthdate.classList.add('errorForm')
    return false;

  } else if (Date.parse(birthdateInput.value) > Date.now()) {
    birthdateError.innerHTML = 'Vous devez entrer une date valide.';
    birthdateError.classList.add('errorStyle')
    birthdate.classList.add('errorForm')
    return false;

    //Fonction qui calcule la majoritée.
    //Elle ne prend pas en compte les années bissextiles,
    //ce qui fausse le resultat de quelques jours
    /*
  } else if ((Date.parse(birthdateInput.value)-Date.now()) > majorite) {
    birthdateError.innerHTML = "Vous n'avez pas la majorité pour vous inscrire";
    birthdateError.classList.add('errorStyle')
    birthdate.classList.add('errorForm')
    return false;
    */

  } else {
    birthdateError.innerHTML = '';
    birthdateError.classList.remove('errorStyle')
    birthdate.classList.remove('errorForm')
    return true;
  }
};

//Control nombre de tournois
function checkNb() {
  //Charge la valeur
  var nbTournois = document.getElementById("quantity").value;
  //Si ce n'est pas un chiffre
  if (isNaN(nbTournois)) {
    quantityError.innerHTML = "Entrez uniquement une valeur numérique.";
    quantityError.classList.add('errorStyle')
    quantity.classList.add('errorForm');
    return false;
    //Si rien n'est indiqué
  } else if (nbTournois == "") {
    quantityError.innerHTML = "Merci d'indiquer le nombre de participations.";
    quantityError.classList.add('errorStyle')
    quantity.classList.add('errorForm');
    return false;
    //Sinon
  } else {
    quantityError.innerHTML = '';
    quantityError.classList.remove('errorStyle')
    quantity.classList.remove('errorForm');
    return true;
  }
}

//Selection d'une ville
function locationValidation() {
  //initialise les variables
  var valid = false;
  var x = document.reserve.location;

  //on crée une boucle qui regarde si un élément est "checked"
  for (var i = 0; i < x.length; i++) {
    if (x[i].checked) {
      valid = true;
      //On termine la boucle quand un element est selectionné,
      //C'est a dire "true"
      break;
    }
  }
  //On retourne la valeur en fonction de la variable 'valide' ou non
  if (valid) {
    locationError.innerHTML = ' ';
    locationError.classList.remove('errorStyle')
    return true;
  } else {
    locationError.innerHTML = 'Vous devez choisir une option.';
    locationError.classList.add('errorStyle')
    return false;
  }
}

//Simple verification du statut "checked"
function checkCGV() {
  if (cgv.checked) {
    cgvError.innerHTML = ' ';
    cgvError.classList.remove('errorStyle')
    return true;
  } else {
    cgvError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    cgvError.classList.add('errorStyle')
    return false;
  }
};

//Ecoute des evenements dans chaque input et lance la fonction associée
//Prénom
firstName.addEventListener('input', prenomValidation);
//Nom
lastName.addEventListener('input', nomValidation);
//Mail
emailAdress.addEventListener('input', mailValidation);
//Age
birthdateInput.addEventListener('input', birthdateValidation);
//Nombre de tournois
quantityTournois.addEventListener('input', checkNb);
//CGV
cgv.addEventListener('change', checkCGV)
//Choix de la ville
document
  .querySelectorAll('input[name="location"]')
  .forEach((inputEl) => inputEl.addEventListener('change', locationValidation));


//Envoi du formulaire
document.getElementById("registrationForm").onsubmit = function (event) {
  //on n'execute pas l'action par defaut
  event.preventDefault();
  //Lance les fonctions et regarde les inputs
  prenomValidation();
  nomValidation();
  mailValidation();
  birthdateValidation();
  checkNb();
  locationValidation();
  checkCGV();

  //Verifie si toutes les conditions sont remplies
  //C'est a dire "true"
  if (
    prenomValidation() == true &&
    nomValidation() == true &&
    mailValidation() == true &&
    birthdateValidation() == true &&
    checkNb() == true &&
    locationValidation() == true &&
    checkCGV() == true
  ) {
    //Si tout est bon, on enleve le formulaire et le mesage de validation s'affiche
    document.querySelector('.modal-body').style.display = 'none';
    document.querySelector('.message-validation').style.display = 'flex';
    return true
  } else {
    return false;
  }
}