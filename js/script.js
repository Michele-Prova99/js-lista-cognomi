// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova


// 1) Chiedo all'utente il cognome con un prompt

var cognomeUtente = prompt("Inserisci il tuo cognome");

// 2) Creo un array con altri Cognomi

var listaCognomi = [ "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi" ];

// 3) Faccio in modo che il cognome inserito dall'utente inizi con la maiuscola

cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1).toLowerCase();

// 4) Metto il cognome inserito dall'utente nell'array

listaCognomi.push(cognomeUtente);

// 5) Ordino la lista alfabeticamente

listaCognomi.sort();

// 6) Stampo la lista ordinata alfabeticamente

document.getElementById("list").innerHTML = listaCognomi;

// 7) Faccio il ciclo while per capire in che posizione "umana" si trovi il cognome inserito dall'utente

var posizione = 0;

var i = 0;

while (i < listaCognomi.length && posizione == 0) {
  if (cognomeUtente == listaCognomi[i]) {
    posizione = ++i;
  }
  i++;
}

// 8) Stampo la posizione "umana" del cognome inserito dall'utente

document.getElementById("position").innerHTML = "Il tuo cognome si trova nella posizione " + posizione + " della lista";
