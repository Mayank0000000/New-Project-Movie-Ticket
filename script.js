const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.taken');
const seats = document.getElementById('seats');
const price = document.getElementById('price');
const list = document.getElementById('list');

populateUI();
let ticketPrice = Number(list.value);


function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}


function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map((sea) => [...seat].indexOf(sea));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  
   
  
    
  
    const selectedSeatsCount = selectedSeats.length;
  
    seats.innerText = selectedSeatsCount;
    price.innerText = selectedSeatsCount * ticketPrice;
  }


  function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seat.forEach((seats, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seats.classList.add('selected');
        }
      });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
      list.selectedIndex = selectedMovieIndex;
    }
  }
  
  
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('taken')) {
      e.target.classList.toggle('selected');    
    }
    updateSelectedCount();

});

list.addEventListener('change', (e) => {
    ticketPrice = Number(e.target.value);
    console.log(e.target.selectedIndex);
    setMovieData(e.target.selectedIndex, e.target.value);
   
    updateSelectedCount();
  });
