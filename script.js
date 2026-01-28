const movieSelect= document.getElementById("movie");

fetch ("http://localhost:3000/movies")
.then(res => res.json())
.then(movies => {

    movies.forEach(movie => {
        const option= document.createElement ("option")
        option.value = movie.Price
        option.textContent= `${movie.Title} (${movie.Price})`;

        movieSelect.appendChild(option);

        
        console.log(movie);
    });
})
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
    console.log(e.target.classList);
    if (e.target.classList.contains("seat") && (!e.target.classList.contains("occupied"))){
        e.target.classList.toggle("selected") 
        const selectedSeats= document.querySelectorAll(".row .seat.selected")
        console.log(selectedSeats.length)
        document.getElementById("count").textContent = selectedSeats.length
        document.getElementById("total").textContent = document.getElementById("movie").value * selectedSeats.length 
    }


});

movieSelect.addEventListener("change", function ()  {

    const selectedSeats= document.querySelectorAll(".row .seat.selected")

    selectedSeats.forEach(selectedSeat => {
        selectedSeat.classList.remove("selected");

    })
    document.getElementById("total").textContent = 0 ;
    document.getElementById("count").textContent = 0 ;
});
