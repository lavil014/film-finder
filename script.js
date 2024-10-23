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
      
      console.log(jsonResponse);

      return jsonResponse;
    
    }
  }
  catch(error){
    console.error(error);
  }


};

getGenres();