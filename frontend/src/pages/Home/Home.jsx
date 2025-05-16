import Nav from "../../components/Nav/Nav"
import { Link } from "react-router"

const Home = () => {

    return(
        <>
            <div>
                <Link to='/catalogue?content_type=0'>vídeos</Link>
            </div>
            <div>
                <Link to='/catalogue?content_type=3'>diseño gráfico</Link>
                <Link to='/catalogue?content_type=2'>diseño 3D</Link>
            </div>
            <div>
                <Link to='/catalogue?content_type=1'>fotos</Link>
            </div>
            <Nav/>
        </>
    )
}

export default Home