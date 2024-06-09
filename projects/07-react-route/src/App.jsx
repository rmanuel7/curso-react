import 'bootstrap/dist/css/bootstrap.min.css'
import Route from './Route'
import Router from './Router'
import { routes } from './routes'
import { Suspense, lazy } from 'react'

const LazyHomePage = lazy(() => import('./pages/home'))
const LazyAboutPage = lazy(() => import('./pages/about'))
const LazyPage404 = lazy(() => import('./pages/Page404'))

export function App () {
    return (
        <div className='container text-center border border-danger vh-100'>
            <div className='row align-items-center m-4 border border-success h-75'>
                <div className='col'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Router routes={routes} defaultComponent={LazyPage404}>
                            <Route path='/' component={LazyHomePage} />
                            <Route path='/about' component={LazyAboutPage} />
                        </Router>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
