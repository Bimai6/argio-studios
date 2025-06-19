import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { alertStructure } from "../../utils/Functions";

const ContactForm = ({className = ""}) => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    const websiteInput = form.current?.elements?.namedItem("website");
    if (websiteInput?.value !== "") {
        alertStructure("warning", "detectado envío automatizado", "inténtalo de nuevo.")
        return;
    }

    emailjs.sendForm(
        "service_h19ns5s",
        "template_m16i9jn",
        form.current,
        "0a0Ck9woOI2ZR9RZ1"
    ).then(
        () => {
            alertStructure("success", "¡correo enviado!", "tu mensaje fue enviado con éxito.")
            e.target.reset();
        },
        () => {
            alertStructure("error", "error", "hubo un problema al enviar el correo.")
        }
    );
};


    const attributes = [
        {type:"text", placeholder: "nombre completo", name:"full_name"},
        {type:"email", placeholder: "email", name:"email", pattern:"^[^\\s@]+@[^\\s@]+\\.(com|es|net|org|info)$", title: "Por favor, introduce un email con un dominio válido (.com, .es, .org, .net, .info)"},
        {type:"text", placeholder: "título", name:"title"}
    ];

    const stylesGeneric = "rounded-full my-5 py-4 text-white";
    const stylesTextInput = "bg-[#343434] pl-10 placeholder-white";
    
    return (
        <>
            <form aria-label="contact form" className={`contact-form flex flex-col mt-5 mr-10 mb-25 ml-8 ${className}`} onSubmit={sendEmail} ref={form}>
                {attributes.map((attribute, index) => (
                    <input 
                    className={`${stylesGeneric} ${stylesTextInput}`}
                    key={index} 
                    {...attribute}
                    required />
                ))}
                <textarea 
                    className={`${stylesGeneric} ${stylesTextInput} h-20 whitespace-nowrap overflow-y-hidden resize-none`} 
                    placeholder="mensaje" 
                    name="message" 
                    required
                >
                </textarea>
                <input className={`${stylesGeneric} bg-black mx-25 hover:cursor-pointer`} type="submit" value="enviar" />
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                <input type="text" name="website" style={{ display: "none" }} autoComplete="off" tabIndex="-1"/>
            </form>
        </>
    )
}

export default ContactForm