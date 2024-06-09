import { Children, useEffect, useState } from 'react'
import { EVENTS } from './consts'
import { match } from 'path-to-regexp'
import { getCurrentPath } from './utils'

export default function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    //!
    const [curPath, setCurPath] = useState(getCurrentPath())

    useEffect(() => {
        const onLocationChange = () => { setCurPath(getCurrentPath()) }

        window.addEventListener(EVENTS.PUSHTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)

        return () => {
            window.removeEventListener(EVENTS.PUSHTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [])

    let routeParams = {}
    //! Obtener las rutas del children
    const routeChildren = Children.map(children, ({ props, type }) => {
        const { name } = type
        const isRoute = name === 'Route'

        if (!isRoute) return null
        return props
    })

    const routeToUse = routes.concat(routeChildren).filter(Boolean)

    const Page = routeToUse.find((route) => {
        if (route.path === curPath) return true
        //! Hemos usado path-to-regexp para poder detectar rutas dinamicas
        const matchURL = match(route.path, { decode: decodeURIComponent })
        const mached = matchURL(curPath)
        if (!mached) return false
        //! Guardar los datos que hemos obtenido con path-to-regexp
        routeParams = mached.params
        return true
    })?.component

    return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
