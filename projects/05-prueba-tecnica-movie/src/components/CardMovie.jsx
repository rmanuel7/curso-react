export function CardMovie( { Title, Year, imdbID, Type, Poster } ) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={ Poster } className="card-img-top img-thumbnail border-0" alt="Show a movie's poster" />
                <div className="card-body">
                    <h5 className="card-title">{ Title }</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{ Year }</h6>
                    <a href="#" className="btn btn-outline-primary">Go movie</a>
                </div>
        </div>
    )
}