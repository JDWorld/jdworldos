---
title: "⚙️ Slegare i pacchetti da plasma-meta"
date: 2026-06-23T15:00:00+02:00
description: "Eliminare il BloatWare senza ronpere KDE"
draft: false
---

## Slegare i pacchetti da plasma-meta ed eliminare il BloatWare
Il plasma-meta è un “pacchetto vuoto” che serve solo a forzare l’installazione di una lista rigida di dipendenze e si posiziona in mezzo KDE full (***plasma***) e KDE minimal (***plasma-desktop***).  
Se rimuovi anche solo un pezzetto (come discover), Arch è costretto a rimuovere l’intero plasma-meta perché la sua “condizione di esistenza” (avere tutti quei pacchetti installati) viene meno.  

Ecco come risolvere il dilemma e ottenere la lista che cerchi senza rompere il sistema. 

### Dove trovare la lista dei pacchetti di plasma-meta?

Puoi interrogare direttamente il database di pacman per vedere cosa “pretende” quel meta-pacchetto con questo comando:

```
pactree -u plasma-meta
```
Se il comando non funziona, installalo con 
```
sudo pacman -S pacman-contrib 
```

## Come “sbarazzarsi” del meta-pacchetto senza rompere KDE

Discover e tanto altro (secondo me) Bloatware fa parte del plasma-meta e se rimuovi plasma-meta, il sistema non si rompe subito, ma al riavvio potresti avere problemi se i pacchetti figli vengono visti come “inutilizzati” e rimossi. 

### La soluzione pulita è trasformare le dipendenze in installazioni esplicite. 

1. Segna tutto come installato manualmente:    
Esegui questo comando per dire ad Arch che tutti i pacchetti necessari a KDE ti servono individualmente (non più perché li vuole il meta-pacchetto): 
```
sudo pacman -D --asexplicit $(pactree -u -d 1 plasma-meta)
```

2. Rimuovi il meta-pacchetto: 
```
sudo pacman -R plasma-meta
```

3. Elimina Bloatware:  
Ora che il “legame” è spezzato, puoi eliminare quello che vuoi senza effetti a catena: 
```
sudo pacman -Rs discover flatpak-kcm oxygen oxygen-sounds vim htop plasma-welcome --noconfirm
```

Su Arch Linux, il “nativo” è l’unico modo per godersi davvero la velocità del sistema e la pulizia del codice.   
Liberarsi di plasma-meta è stato il passo decisivo per riprendersi il controllo totale del proprio PC.  

## Bonus Pulizia
Infine eccoti tre piccoli consigli “da purista” per rifinire il tuo sistema ora che hai spezzato i legami con i meta-pacchetti:

### 1. Pulisci la cache dei pacchetti:   
Pacman conserva una copia di ogni pacchetto scaricato (anche quelli che hai rimosso). Se vuoi recuperare spazio prezioso: 
```
sudo pacman -Sc
```

Se vedi errori riguardanti file /var/cache/pacman/pkg/download-*, si tratta di pacchetti scaricati parzialmente durante un aggiornamento interrotto.  

* Soluzione: Rimuovi manualmente i file temporanei corrotti: 
```
sudo rm -rf /var/cache/pacman/pkg/download-*
```
* Alternativamente, pulisci l’intera cache con;  
```
sudo pacman -Scc
```
(fai attenzione, questo rimuove tutto, non avrai pacchetti per il downgrade).

### 2. Usare paccache per una pulizia sicura

Il metodo raccomandato per la pulizia della cache non è pacman -Scc, ma paccache, che di default mantiene le ultime 3 versioni dei pacchetti.

Installa pacman-contrib (richiesto): 
```
sudo pacman -S pacman-contrib
```
Rimuovi la cache dei pacchetti non installati: 
```
paccache -r
```
Rimuovi anche la cache dei pacchetti disinstallati (più aggressivo): 
```
paccache -rvk0
```
### 3. Verifica le dipendenze rimaste orfane:  
Ora che hai rimosso il Bloatware, potrebbero esserci rimaste delle librerie che non servono più a nessuno. Controlla con: 
```
sudo pacman -Qdt
```
Se la lista contiene roba che non ti serve, rimuovila: 
```
sudo pacman -Rns nome-pacchetto
```
Se la pulizia fallisce perché alcuni pacchetti non sono più necessari ma sono ancora bloccati: 
```
sudo pacman -Rns $(pacman -Qdtq)
```

(Nota: Controlla sempre la lista dei pacchetti prima di confermare).
