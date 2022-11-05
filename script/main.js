const typedTextSpan = document.querySelector(".hero-header-2-text");

const textArray = ["Front-End Developer", "Creative Designer", "Student", "Gamer"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay);
});

// // EMAIL FORM

// const firebaseConfig = {
//     apiKey: "AIzaSyAjUPnQi4KVTie8lAUivuh-NIro_Tj_bgI",
//     authDomain: "portfolioemails-5a6fe.firebaseapp.com",
//     projectId: "portfolioemails-5a6fe",
//     storageBucket: "portfolioemails-5a6fe.appspot.com",
//     messagingSenderId: "963607487954",
//     appId: "1:963607487954:web:27f427f3ca3d86448b140b",
//     measurementId: "G-GWG7N15WSR"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);


// var emailsRef = firebase.database().ref('emails');

// document.getElementById('emailForm').addEventListener('submit', submitEmail);

// function submitEmail(e){
//     e.preventDefault();

//     var emailInput = getEmail('email');

//     saveEmails(email);

// }

// function getEmail(email){
//     return document.getElementById(email).value;
// }

// function saveEmails(email){
//     var newEmailRef = emailsRef.push();
//     newEmailRef.set({
//         email: email
//     })
// }