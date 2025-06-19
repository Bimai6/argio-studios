import ContactForm from "../../components/ContactForm/ContactForm"
import Nav from "../../components/Nav/Nav"
import { contactParagraph } from "../../utils/Arrays";

const Contact = () => {

    return(
        <>
        <div data-testid="page-contact" className="flex flex-col lg:flex-row justify-center">
            <ContactForm className="order-2 lg:order-1"/>
            <div className="flex flex-col mt-2 mb-10 order-1 lg:order-2">
                {contactParagraph.map((item, key) => {
                    return(
                        <p key={key} className="text-xl sm:text-2xl md:text-3xl xl:text-4xl ml-10 xl:ml-30 mt-8 mr-15 text-center lg:text-start">{item.text}</p>
                    );
                })}
            </div>
        </div>
        <Nav />
        </>
    )
}

export default Contact