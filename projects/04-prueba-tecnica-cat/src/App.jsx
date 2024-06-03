import 'bootstrap/dist/css/bootstrap.min.css'
import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';

export function App()
{
    const [fact, setFact] = useState('meau loading')
    const [firstWord, setFirstWord] = useState('loading')
    useEffect( ()=> refreshFact() ,[] )

    const refreshFact = () => {
        const loadFact = async ()=>
        {
            const _fact = await getFact()
            const _firstWord = _fact.split( ' ' ).slice( 1,2 ).join( '' )
            setFact( _fact )
            setFirstWord( _firstWord )
        }

        loadFact()
    }

    return (
        <div className="container text-center vh-100 p-4">

            <div className="row p-4 m-4">

                <div className="col align-self-start"> </div>

                <div className="col align-self-center">

                    <section className="card" style={{ width: '18rem' }}>
                        <img src={`https://cataas.com/cat/says/${firstWord}`} className="card-img-top" width="320" alt="Image from API cataas.com" />
                        <div className="card-body">
                            <h5 className="card-title">API Cat</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{ firstWord }</h6>
                            <p className="card-text">{ fact }</p>
                            <a onClick={()=>refreshFact()} className="btn btn-outline-primary">Refresh fact</a>
                        </div>
                    </section>

                </div>

                <div className="col align-self-start"> </div>

            </div>

        </div>
    )
}


function getFact()
{
    return xhrFetch( { url: 'https://catfact.ninja/fact', method: 'GET', data: null } )
    .then( v => v.data.fact )
    .catch( _r => _r.msg )
}

function xhrFetch( { url, method, data } )
{
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.open( method, url )
        xhr.responseType = 'json'
        xhr.setRequestHeader( 'Accept', 'application/json; charset=utf-8' )
        //! xhr.setRequestHeader( 'Content-Type', 'application/json; charset=utf-8' )
        xhr['onload'] = (event)=>{
            const me = event.target
            if ( me.readyState === 4 && me.status === 200 )
            {
                resolve( { data: me.response } )
            }
            else
            {
                reject( {msg: 'error', data: me.response } )
            }
        }
        xhr.send( JSON.stringify( data ) )
    });
}