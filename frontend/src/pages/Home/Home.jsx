import Nav from "../../components/Nav/Nav"
import { Link } from "react-router"

const Home = () => {

    return(
        <>
            <div>
                <Link to='/catalogue'>videos</Link>
            </div>
            <div>
                <Link to='/catalogue'>diseño gráfico</Link>
                <Link to='/catalogue'>diseño 3d</Link>
            </div>
            <div>
                <Link to='/catalogue'>fotos</Link>
            </div>
            <Nav/>
        </>
    )
}

export default Home