import { useRef, useState } from "react"
const API_KEY = '492bd15f'

export function useMovies( { search })
{
    const [responseMovies, setResponseMovies] = useState([])
    const previousSearch = useRef( search )

    const getMovies = ()=>{

        if(search === previousSearch.current ) return

        if(search)
        {
            previousSearch.current = search
            
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
            .then( res => res.json() )
            .then( json => setResponseMovies( json.Search || [] ) )
            .catch( error => setResponseMovies( [] ) )
        }
        else
        {
            setResponseMovies( [] )
        }
    }

    return { movies: responseMovies, getMovies: getMovies }
}