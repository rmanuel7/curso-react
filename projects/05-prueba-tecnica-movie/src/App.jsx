import 'bootstrap/dist/css/bootstrap.min.css'
import { SearchInput } from './components/SearchInput'
import { GridMovies } from './components/GridMovies'
import { AlertMovie } from './components/AlertMovie'
import { useSearch } from './hooks/useSearch'
import { useMovies } from './hooks/useMovies'

export function App()
{
    const {query, setQuery, error } = useSearch()
    const { movies, getMovies } = useMovies( { search: query } )
    const hasMovies = movies.length > 0

    const handleSubmit = ( event )=>{
        event.preventDefault()
        getMovies()
    }
    const handleInput = ( event )=>{
        setQuery( event.target.value )
        //! The input validation goes below
    }

    return (
        <div className="d-flex flex-column align-items-center text-center mb-3">
            <div className="p-2">
                <h1>API Movie</h1>
            </div>
            <div className="p-2 w-50">
                <SearchInput handleSubmit={ handleSubmit } handleInput={ handleInput } value={ query } />
            </div>
            <div className="p-2 w-75">
                { hasMovies ? <GridMovies movies={movies}/> : <AlertMovie /> }
            </div>
        </div>
    )
}