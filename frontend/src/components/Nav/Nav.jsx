import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <>
        <nav>
        <Link to="/about-us">Sobre nosotros</Link>
        <Link to="/">Principal</Link>
        <Link to="/contact">Contacto</Link>
        </nav>
        </>
    )
}

export default Nav