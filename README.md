Movie Seat Booking – JavaScript Project
Detta projekt är en JavaScript‑applikation där användaren kan välja en film, markera lediga stolar och se totalpriset uppdateras automatiskt. 
Filmerna hämtas från en lokal JSON‑server och koden är uppdelad i moduler för tydlighet och struktur.

Funktioner
  - Välj film från en dynamiskt genererad dropdown
  - Klicka på stolar för att markera dem som selected
  - Occupied stolar går inte att klicka på
  - Pris och antal uppdateras automatiskt
  - Filmer hämtas från en JSON‑server
  - Kod uppdelad i moduler (script.js, api.js, movie.js)
  - Publicerad via GitHub Pages

Teknisk struktur
  - index.html – struktur och layout
  - style.css – styling
  - script.js – logik för stolar, pris och filmval
  - api.js – hämtar filmer från JSON‑server
  - movie.js – Movie‑klass enligt uppgiftskraven
  - db.json – lokal databas med filmer

Så här kör man projektet
  - Installera JSON‑server :
    npm install -g json-server
  
  - Starta servern:
    json-server --watch db.json
  - Öppna index.html i webbläsaren
  - Välj film och klicka på stolar för att testa funktionerna

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Loggbok
  -Dag 1 - 3:
    Fick klickfunktionen på stolarna att fungera och lade till selected‑klassen.
  -Dag 4-7:
    Implementerade räkning av valda stolar och dynamisk prisuppdatering.
  -Dag 8-12:
    Skapade JSON‑server och lade in filmer i db.json. Hämtade filmerna med fetch och fyllde dropdownen.
  -Dag 14-15:
    Delade upp koden i moduler och skapade Movie‑klassen. Fixade småbuggar.
  -Dag 18:
    La till en READMEfil och publicerade projektet på GitHub och aktiverade GitHub Pages.





