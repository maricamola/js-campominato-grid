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

//Creo funzione per generare lo square

function createSquare() {
  const newSquare = document.createElement('div');

  //assegno nome alla classe square
  newSquare.className = 'square';

  return newSquare ;
}

