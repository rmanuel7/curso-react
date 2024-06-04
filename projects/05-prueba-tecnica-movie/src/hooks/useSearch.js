import { useEffect, useRef, useState } from 'react'

export function useSearch()
{
    const [query, setQuery] = useState('')
    const [error, setError] = useState('')
    const isFirstRender = useRef(true)

    useEffect(()=>{
        if(isFirstRender.current)
        {
            isFirstRender.current = query === ''
            return
        }
        
        if(query === '' )
        {
            setError('No has indicado una pelicula.')
            return
        }
        if(query.match(/^\d+$/))
        {
            setError('No se puede buscar numeros como pelicula.')
            return
        }
        if(query.length < 3)
        {
            setError('El nombre de una pelicula dede ser mayor a 3 caracteres.')
            return
        }

        setError(null)

    },[query])
    
    return { query, setQuery, error }
}
