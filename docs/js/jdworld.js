// jdw-copyright.js - Calcolo giorni online JDWorld
const oggi = new Date();
const altra_data = new Date('August 8, 2002');
const differenza_tempo = oggi.getTime() - altra_data.getTime();
const giorni = Math.round(differenza_tempo / (1000 * 60 * 60 * 24));

// Inserisce il testo dinamicamente dentro l'elemento HTML con ID "jdw-copyright"
document.addEventListener("DOMContentLoaded", function() {
    const elemento = document.getElementById("jdw-copyright");
    if (elemento) {
        elemento.innerHTML = `Powered by JDWorld © 2002 to Present Day.<br>The JDWorld is on the Web by ${giorni} Days.`;
    }
});

