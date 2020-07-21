$(document).ready(() =>{
    $('#search-form').on('submit', (e)=>{
        e.preventDefault();
        let searchText = $('#search-text').val();
        getMovies(searchText);
    })
})

const getMovies = (searchText) =>{
   console.log(searchText);
   const key = '9f2028b7';
   const base = 'http://www.omdbapi.com/';
   const query = `?apikey=${key}&s=${searchText}`;
   axios.get( base + query)
    .then((data) =>{
        console.log(data);
        let movies = data.data.Search;

        let output = '';
            $.each(movies, (index, movie) => {
                output += `
                    <div class="col-md-3 card">
                        <div class="well text-center">
                            <img src="${movie.Poster}">
                            <h5>${movie.Title}</h5>
                            <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                        </div>
                    </div>
                `;
            });

      $('#movies').html(output);
    })
    .catch(err => console.log(err))
}

function movieSelected  (id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;

}

const getMovie = async () =>{
    let movieId = sessionStorage.getItem('movieId');
     const key = '9f2028b7';
    // const base = 'http://www.omdbapi.com/';
    // const query = `?apikey=${key}&i=${movieId}`;
    // const response = await fetch(base + query);
    //const data = response.json();

    axios.get( `http://img.omdbapi.com/?i=${movieId}&apikey=${key}`)
        .then((data) =>{
            console.log(data); 
        })
        .catch(err => console.log(err))
}