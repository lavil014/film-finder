const tmdbKey = '3664c400672e4ce89e46442ce663847a';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async ()=>{
  const genreRequestEndpoint = '/genre/movie/list'; 
  const requestParams = `?api_key=${tmdbKey}`;
  const urlFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  console.log(urlFetch);

  try{
    let response = await fetch(urlFetch);

    if(response.ok){
      let jsonResponse = await response.json();
      let genres = jsonResponse.genres;
      

      return genres;
    
    }else{
      console.error('Error with the response', response.error)
    }
  }
  catch(error){
    console.error('Error fething data from the API:', error);
  }
};

const getMovies = async()=>{

  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  console.log(urlToFetch)

  try{
    let response = await fetch(urlToFetch);
    
    if(response.ok){
      let newResponse = await response.json();

      console.log(newResponse.results);

      return newResponse; 
    }
    
  }
  catch(error){
    console.error(error)
  }

}

getGenres();
getMovies();
