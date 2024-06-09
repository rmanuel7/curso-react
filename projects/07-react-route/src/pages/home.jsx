import { Link } from '../components/Link'

export default function HomePage () {
    return (
        <>
            <h1>Home page</h1>
            <hr />
            <p>
                Esta es una pagina de ejemplo para crear un React Route
            </p>
            <Link to='/about'>About</Link>
        </>
    )
}
