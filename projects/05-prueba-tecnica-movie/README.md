Crear una applicacion para buscar peliculas

API a usar:

- OMDb API
  - API Key
   492bd15f

  - JSON API requests to:
    http://www.omdbapi.com/?apikey=[yourkey]&

  - Poster API requests:
    http://img.omdbapi.com/?apikey=[yourkey]&
  
  - JSON Response = {
        "Search": [
            {
            "Title": "Captain America: The First Avenger",
            "Year": "2011",
            "imdbID": "tt0458339",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzAxMjg0NjYtNjNlOS00NTdlLThkMGEtMjAwYjk3NmNkOGFhXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
            }
        ],
        "totalResults": "127",
        "Response": "True"
    }


Requerimentos
Create a search button for search movies and show a listing of the movies ( title, year and poster ) in a list grid