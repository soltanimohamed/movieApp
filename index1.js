import { renderMovieSaved  } from "./render.js";

const mySavedListEl = document.getElementById("mySavedList")
const mySavedMovies = JSON.parse(localStorage.getItem("movies"))
for(let savedMovie of mySavedMovies){
    let movie = renderMovieSaved(savedMovie)
    mySavedListEl.innerHTML += movie
}

document.addEventListener("click", (e) =>{
    if(e.target.id === "removeBtn"){
        const savedMovies = JSON.parse(localStorage.getItem("movies"))
        const updatedSavedMovies = savedMovies.filter(movie =>{
            return movie.Title !== e.target.dataset.delete
        })
        localStorage.setItem("movies", JSON.stringify(updatedSavedMovies))
    }
})