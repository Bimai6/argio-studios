import Nav from "../../components/Nav/Nav"
import { Link } from "react-router"
import filterItems from "../../utils/Arrays"

const Home = () => {
    return (
        <>
            <div className="bg-black h-screen text-white relative">
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
