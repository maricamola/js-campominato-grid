//Creo const per selezionare il container

const container = document.querySelector('.container');

//Creo il ciclo per generare i 100 square

for(let i = 1; i < 100; i++ ){
  
  const firstSquare =  createSquare();
  
  //aggiungiamo un evento al 'click' 
  // 'this' ci serve per richiamare l'elemento che abbiamo     cliccato
  firstSquare.addEventListener('click', function(){
    this.classList.toggle('click')
  })
  container.appendChild(firstSquare)
}

/**********funzioni*************/

//Creo funzione per il bottone che dovrà mostrare il container

function showContainer(){
  const container = document.getElementById('mmcontainer');

  if(container === 'none'){
    container = 'block';
  } else {
    container = 'none'
  }
}

//Creo funzione per generare lo square

function createSquare() {
  const newSquare = document.createElement('div');

  //assegno nome alla classe square
  newSquare.className = 'square';

  return newSquare ;
}

//Creo una funziona che mi permette di vedere in console il numero della casella selezionata



