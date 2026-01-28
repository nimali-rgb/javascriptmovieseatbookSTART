import { fetchMovies } from "./api.js";
import Movie from "./movie.js";

const movieSelect = document.getElementById("movie");

//Hämta filmer från JSON-server
fetchMovies().then(movies => {
    movies.forEach(movie => {

    const movieObj = new Movie(movie.Title, movie.Price, movie.id);

    const option = document.createElement("option");
    option.value = movieObj.Price;
    option.textContent = `${movieObj.Title} (${movieObj.Price})`;

    movieSelect.appendChild(option);

    console.log(movieObj);
  });
});


// Klick på stolar
const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  console.log(e.target.classList);

  if (e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")) {

    e.target.classList.toggle("selected");

    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    console.log(selectedSeats.length);

    document.getElementById("count").textContent = selectedSeats.length;
    document.getElementById("total").textContent =
      document.getElementById("movie").value * selectedSeats.length;
  }
});


// När man byter film
movieSelect.addEventListener("change", function () {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  selectedSeats.forEach(selectedSeat => {
    selectedSeat.classList.remove("selected");
  });

  document.getElementById("total").textContent = 0;
  document.getElementById("count").textContent = 0;
});
