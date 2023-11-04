import { renderMovieSearch } from "/render.js"
const baseUrl = "http://www.omdbapi.com/?apikey=b6b4a3f0&t="
const searchInputEl = document.getElementById("searchIput")
const searchBtnEl = document.getElementById("btn")
const searchResultList = document.getElementById("searchResult")
const watchListEl = document.getElementById("myList")
const savedList = document.getElementById("mySavedList")
let film
let savedMovies = []


searchBtnEl.addEventListener("click", () =>{
    searchResultList.innerHTML = ""
    let title = searchInputEl.value
    if(title){
        fetch(`${baseUrl}${title}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let searchListItem = document.createElement("li")
                searchListItem.innerHTML= renderMovieSearch(data)
                searchResultList.append(searchListItem)
                film = {
                    Poster: `${data.Poster}`,
                    Title: `${data.Title}`,
                    imdbRating: `${data.imdbRating}`,
                    Runtime: `${data.Runtime}`,
                    Genre: `${data.Genre}`,
                    Plot: `${data.Plot}`
                }
            })
        }

})

 

 document.addEventListener("click", (e) =>{
    if(e.target.id === "addBtn"){
        if(localStorage.getItem("movies")){
            savedMovies = JSON.parse(localStorage.getItem("movies")) 
        }
        if(!savedMovies.some(movie => movie.Title === film.Title)){
            savedMovies.push(film)
            localStorage.setItem("movies", JSON.stringify(savedMovies))
        }
            
            
    }  
 })

