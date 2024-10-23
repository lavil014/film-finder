const tmdbKey = '3664c400672e4ce89e46442ce663847a';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = ()=>{
  const genreRequestEndpoint = '/genre/movie/list'; 

  console.log(`${tmdbBaseUrl}${genreRequestEndpoint}`)

};

getGenres();