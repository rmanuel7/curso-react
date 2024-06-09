import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Router from './Router'
import Route from './Route'
import { Link } from './components/Link'
import { getCurrentPath } from './utils'

vi.mock('./utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    //!
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('Test testing. Should work', () => {
        expect(1).toBe(1)
    })

    it('Empty routes. Should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('Page 404. Should render page 404 without problem when any route is matching', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('Match route. Should render un component without problem', () => {
        //!
        getCurrentPath.mockReturnValue('/about')

        const routes = [
            {
                path: '/',
                component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                component: () => <h1>About</h1>
            }
        ]

        render(<Router routes={routes} />)
        //! console.log(screen.debug())
        expect(screen.getByText('About')).toBeTruthy()
    })

    it('Click link. Should render using Link component', async () => {
        //!
        getCurrentPath.mockReturnValueOnce('/')

        render(
            <Router>
                <Route path='/' component={() => { return (<> <h1>Home</h1> <Link to='/about'>Ir a about</Link> </>) }} />
                <Route path='/about' component={() => <h1>About</h1>} />
            </Router>
        )

        const button = screen.getByText(/Ir a about/)
        fireEvent.click(button)

        const aboutTitle = await screen.findByText('About')

        expect(aboutTitle).toBeTruthy()
    })
})
