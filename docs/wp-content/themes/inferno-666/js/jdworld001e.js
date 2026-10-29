//jdword.js contiene: copyright.js ! copy-btn.js ! menu-mobile.js
// jdw-copyright.js - Calcolo giorni online JDWorld
const oggi = new Date();
const altra_data = new Date('June 19, 2026');
const differenza_tempo = oggi.getTime() - altra_data.getTime();
const giorni = Math.round(differenza_tempo / (1000 * 60 * 60 * 24));

// Inserisce il testo dinamicamente dentro l'elemento HTML con ID "jdw-time-counter"
document.addEventListener("DOMContentLoaded", function() {
    const elemento = document.getElementById("jdw-time-counter");
    if (elemento) {
        elemento.innerHTML = `Powered by JÐWØ®LÐ Ø$ © 2026 to Present Day | JÐWØ®LÐ Ø$ was born ${giorni} days ago`;
    }
});


// Copy-Button (copy-btn.js) con Icona, sfondo scuro, bordo arancio/rosso
// 🛸 JDW-CORE: AGENTE AUTOMATICO DI COPIA PER BLOCCHI CODICE <PRE>
document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutti i blocchi di codice grandi (pre) del sito
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach((block) => {
        // Forza la posizione relativa sul blocco per allineare il bottone
        block.style.position = 'relative';

        // Crea il pulsante di copia stile terminale
        const copyButton = document.createElement('button');
        copyButton.className = 'jdw-copy-btn';
        copyButton.innerText = ' 📋 ';

        // Inietta il pulsante dentro il blocco <pre>
        block.appendChild(copyButton);

        // Gestione dell'evento al clic
        copyButton.addEventListener('click', async () => {
            // Estrae il testo escludendo il testo del pulsante stesso
            const codeText = block.innerText.replace(' 📋 ', '').trim();

            try {
                await navigator.clipboard.writeText(codeText);
                copyButton.innerText = ' 🎯 ';
                copyButton.style.color = '#ffcc00'; // Diventa Giallo al successo

                // Ripristina lo stato iniziale dopo 2 secondi
                setTimeout(() => {
                    copyButton.innerText = ' 📋 ';
                    copyButton.style.color = '#00ffcc'; // Torna Ciano
                }, 2000);
            } catch (err) {
                copyButton.innerText = ' ❌ ERRORE';
                console.error('Impossibile copiare il codice: ', err);
            }
        });
    });
});

// 🛸 JDW-CORE: GESTORE APERTURA MENU A TENDINA PER SMARTPHONE menu-mobile.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('jdw-menu-toggle');
    const navLinks = document.getElementById('jdw-nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Aggiunge o rimuove la classe 'attivo' per aprire/chiudere la tendina
            navLinks.classList.toggle('attivo');

            // Cambia l'icona del pulsante per dare feedback visivo
            if (navLinks.classList.contains('attivo')) {
                menuToggle.innerText = '✖';
            } else {
                menuToggle.innerText = '☰';
            }
        });
    }
});
