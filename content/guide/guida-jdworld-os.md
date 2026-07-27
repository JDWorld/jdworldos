---
title: "🔥 Creare JDWorld OS"
date: 2026-07-27T18:00:00+02:00
description: "Come ho creato il JDWorld OS"
draft: false
---

## JDWorld OS (Based on Arch Linux KDE)
Questa è la storia di come è nato il ***JDWorld OS***. Anche se non so ancora come creare l'ISO per la distribuzione. Archiso dite? un'incubo, Penguins-Eggs è anche peggio di archiso, percui per ora lascio perdere la creazione dell'iso, ma se volete potete replicare quello che sto facendo per il mio OS GNU/Linux Custom basato su Arch Linux!


### 1. Installare Arch Linux con il gruppo d'ambiente: ***plasma-meta***
Come districarsi in ArchInstall [27-07-2026]

{{< youtube jFfE5Yv_QpU >}}


---

### 2. [Slegare i pacchetti dal plasma-meta ed eliminare il bloatware](/guide/guida-plasma-meta/) 
Via Discover, Flatpak, Oxygen ed Air: in JDWorld OS il software spazzatura è totalmente assente.

---

### 3. Installare il Gestore di Pacchetti JDW
Per installare i pacchetti nativi JDW necessiti del Gestore di Pacchetti del JDWorld OS

---

### 4. Installare il JDWorld OS System Tray Menù
Il cuore dell'interfaccia utente di JDWorld OS è gestito da un menù avanzato, multilivello e dinamico, sviluppato in Python 3 utilizzando le librerie grafiche native PyQt6 (`QWidgets`).

---

## Conclusioni

Niente database pesanti, niente rallentamenti, niente compilazioni infinite e nessun repository di terze parti da aggiungere (la logica è integrata nel core). Tutto ciò che serve come dipendenza viene prelevato direttamente dai repository ufficiali stabili di Arch Linux.

## Lo Stato Attuale del Sistema

Oggi il mio sistema principale gira su Arch Linux puro con:
* **956 pacchetti totali** (0 Bloatware)
* **0 pacchetti AUR** (*Vade Retro!*)
* **0 Flatpak, Snap o AppImage**

### Anteprima

![fastfetch](/images/jdwos-fastfetch.png)


_JDWorld OS Console Terminal - Registro di bordo del 27 Luglio 2026_
