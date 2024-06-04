import { CardMovie } from "./CardMovie";

export function GridMovies({ movies = [] }) {
    return (
        <div className="container text-center">
            <div className="row gap-1">
                {
                    movies.map(
                        ( val, key )=>(
                            <CardMovie key={val.imdbID} { ...val } />
                        )
                    )
                }
            </div>
        </div>
    )
}