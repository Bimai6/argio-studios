import ContactForm from "../../components/ContactForm/ContactForm"
import Nav from "../../components/Nav/Nav"

const Contact = () => {

    return(
        <>
        <div data-testid="page-contact" className="flex">
            <ContactForm/>
            <p className="ml-10 mt-8 mr-8 text-end">Aquí va una descripción que el equipo de ArgioStudios tiene que proveer al desarrollador...</p>
        </div>
        <Nav />
        </>
    )
}

export default Contact