---
title: "⚙️ Guida ai Comandi Core"
date: 2026-06-19T15:00:00+02:00
description: "Guida ai comandi del Gestore Pacchetti"
draft: false
---

#### 📦 Installazione
Per installare un pacchetto nel terminale, digita:
```bash
sudo jdw-install nome-pacchetto.jdw
```
**`jdw-install` (L’Installatore Ibrido):** Se rileva il pacchetto in locale procede all'istante. In caso contrario, vola su GitHub, lo scarica direttamente in RAM (`/tmp/`), evade le dipendenze sfruttando i repository ufficiali di Arch, lo estrae, lo configura e pulisce la memoria temporanea.

#### 🗑️ Disinstallazione
Per rimuovere un pacchetto, digita:
```bash
sudo jdw-remove nome-pacchetto
```
**`jdw-remove` (Il Disinstallatore Universale):** Sfrutta gli script `remove.sh` atomici dedicati a ogni pacchetto. Elimina i file di sistema, pulisce le configurazioni nella cartella Home dell’utente reale (`${SUDO_USER}`) e cancella le tracce dal database locale, lasciando il sistema immacolato.

#### 🔍 Ispezione Metadati
Per visualizzare la scheda tecnica, digita:
```bash
sudo jdw-info nome-pacchetto
```
**`jdw-info` (Il Visualizzatore Cloud):** Mostra le specifiche tecniche dei pacchetti formattandole in una tabella stile Arch Web. Funziona istantaneamente sia per i file locali che per quelli residenti online sul Cloud di GitHub.

#### 📊 Elenco Pacchetti
Per vedere la lista dei pacchetti installati, digita:
```bash
sudo jdw-list
```
**`jdw-list`:** Elenca istantaneamente tutti i pacchetti `.jdw` attivi sul sistema.

Niente database pesanti, niente rallentamenti, niente compilazioni infinite e nessun repository di terze parti da aggiungere (la logica è integrata nel core). Tutto ciò che serve come dipendenza viene prelevato direttamente dai repository ufficiali stabili di Arch Linux.
