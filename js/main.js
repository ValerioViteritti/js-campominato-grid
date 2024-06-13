// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// Bonus

// Seleziono il contenitore dei blocchi
function GeneraGriglia() {
    

    const container = document.getElementById("grid");
    // previene che non resti la griglia precedente switchando le varie difficoltà
    container.innerHTML = '';
    // Imput dell'utente che definisce la difficoltà
    let difficolta = document.getElementById('difficolta').value;

    console.log(difficolta);
    // definisco le variabili che userò per le dimensioni della griglia
    let DimensioniGriglia = 0;
    let rows = 0;

    // - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    // - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    // - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
    if (difficolta === '1'){
        DimensioniGriglia = 100;
        rows = 10;
    } else if (difficolta === '2'){
        DimensioniGriglia = 81;
        rows = 9;
    } else if (difficolta === '3'){
        DimensioniGriglia = 49;
        rows = 7;
    }

    container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;

    for (let index = 1; index <= DimensioniGriglia; index++) {
        const element = document.createElement('div');
        element.classList.add('box')
        element.innerHTML = `<div class="box-interno">${index}</div>`
        container.appendChild(element);

        element.addEventListener('click', function(){
            element.classList.toggle('clicked');


        });
    
    
   
        
    }








}


