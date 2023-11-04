export const renderMovieSearch = (movie) =>{
    const html = `
        <div class="container">
            <img class="movie-img" src="${movie.Poster}">
            <div class="movie-info">
                <div class="title-rate">
                    <h2>${movie.Title}</h2>
                    <p>&#11088 ${movie.imdbRating}</p>
                </div>
                <div class="movie-details">
                    <p>${movie.Runtime}<p>
                    <p>${movie.Genre}</p>
                    <button id="addBtn">&#10133 Watchlist</button>
                </div>
                <p id="plot">${movie.Plot}</p>
            </div>
        </div>
    `
    return html
 }

 export const renderMovieSaved = (movie) =>{
    const html = `
        <div class="container">
            <img class="movie-img" src="${movie.Poster}">
            <div class="movie-info">
                <div class="title-rate">
                    <h2>${movie.Title}</h2>
                    <p>&#11088 ${movie.imdbRating}</p>
                </div>
                <div class="movie-details">
                    <p>${movie.Runtime}<p>
                    <p>${movie.Genre}</p>
                    <button id="removeBtn" data-delete="${movie.Title}" onClick="window.location.reload()">&#x2296 Remove</button>
                </div>
                <p id="plot">${movie.Plot}</p>
            </div>
        </div>
    `
    return html
 }