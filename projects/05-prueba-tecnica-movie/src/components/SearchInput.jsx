export function SearchInput( { value, handleInput, handleSubmit } ) {
    return (
        <form onSubmit={ handleSubmit } className="input-group mb-3">
            <input type="search" name="search" value={ value } onInput={ handleInput }
                className="form-control" 
                placeholder="The Avengres, Star Wars, Matrix ..."  
                aria-label="Text input search movie" />
            <button className="btn btn-outline-secondary" type="submit" >Search</button>
        </form>
    )
}