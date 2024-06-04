export function AlertMovie( { message } ) {
    return (
        <div className="alert alert-danger" role="alert">
            { message || "No se encontraron resultados para esta búsqueda." } 
        </div>
    )
}