import Nav from "../../components/Nav/Nav"
import { Link } from "react-router"
import filterItems from "../../utils/Arrays"

const Home = () => {
    return (
        <>
            <video
            className="fixed top-0 left-0 w-full h-full object-cover -z-20"
            autoPlay
            muted
            loop
            playsInline
            >
                <source src="/videos/background_home.mp4" type="video/mp4" />
            </video>

            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80 -z-10"></div>

            <div className="h-screen text-white relative z-50">
                <div className="grid grid-cols-3 grid-rows-3 h-full place-items-center text-xl sm:text-2xl md:text-4xl xl:text-5xl">
                    {filterItems.map((item, index)=> (
                        <div key={index} className={`col-start-${item.col} row-start-${item.row}`}>
                            <Link to={`/catalogue?content_type=${item.value}`}>{item.label}</Link>
                        </div>
                    ))}
                    <div className="col-start-2 row-start-2"></div>
                </div>
                <Nav />
            </div>
        </>
    )
}

export default Home
