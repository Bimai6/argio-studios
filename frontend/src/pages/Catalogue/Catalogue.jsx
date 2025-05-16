import ListContent from "../../components/ListContent/ListContent"
import Nav from "../../components/Nav/Nav"

const Catalogue = () => {

    const filterItems = ['vídeos', 'diseño gráfico', 'diseño 3D', 'fotos'];

    return(
        <>
        <div>
            {filterItems.map((item, index) => {
                <p key={index}>{item}</p>
            })}
        </div>
        <div className="flex flex-col items-center w-full h-full">
            <ListContent />
        </div>
        <Nav />
        </>
    )
}

export default Catalogue