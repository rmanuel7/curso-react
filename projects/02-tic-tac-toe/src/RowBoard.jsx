export function RowBoard( { index, value, callback } )
{
    const handleClick = ( )=> {
        callback(index)
    } 

    return (
        <div className="col border p-0">
            <button className="btn w-100" onClick={handleClick}>{value||(<i>&emsp;</i>)}</button>
        </div>
    )
}