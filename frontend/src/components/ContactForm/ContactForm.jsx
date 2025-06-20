import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { alertStructure } from "../../utils/Functions";
import { contactAttributes } from "../../utils/Arrays";

const ContactForm = ({className = ""}) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const websiteInput = form.current?.elements?.namedItem("website");
        if (websiteInput?.value !== "") {
            alertStructure("warning", "Detectado envío automatizado", "Inténtalo de nuevo.")
            return;
        }

        emailjs.sendForm(
            "service_h19ns5s",
            "template_m16i9jn",
            form.current,
            "0a0Ck9woOI2ZR9RZ1"
        ).then(
            () => {
                alertStructure("success", "¡Correo enviado!", "Tu mensaje fue enviado con éxito.")
                e.target.reset();
            },
            () => {
                alertStructure("error", "Error", "Hubo un problema al enviar el correo.")
            }
        );
    };

    const stylesGeneric = "rounded-full my-5 py-4 text-white";
    const stylesTextInput = "bg-[#343434] pl-10 placeholder-white";
    
    return (
        <>
            <form 
                aria-label="contact form" 
                className={`contact-form flex flex-col mt-5 mr-10 mb-25 ml-8 ${className}`}
                role="form" 
                onSubmit={sendEmail} 
                ref={form}
            >
                {contactAttributes.map((attribute, index) => (
                    <input 
                        className={`${stylesGeneric} ${stylesTextInput}`}
                        key={index} 
                        {...attribute}
                        required
                    />
                ))}
                <textarea 
                    className={`${stylesGeneric} ${stylesTextInput} h-20 whitespace-nowrap overflow-y-hidden resize-none`} 
                    placeholder="mensaje"
                    aria-label="Cuerpo de texto del correo"
                    role="textarea" 
                    name="message" 
                    required
                />
                <input 
                    className={`${stylesGeneric} bg-black mx-25 hover:cursor-pointer`} 
                    type="submit"
                    aria-label="Enviar mensaje" 
                    value="enviar"
                    role="button"
                />
                <input 
                    type="hidden" 
                    name="time" 
                    value={new Date().toLocaleString()}
                    aria-hidden="true"
                />
                <input 
                    className="hidden"
                    type="text" 
                    name="website" 
                    autoComplete="off" 
                    tabIndex="-1"
                    aria-hidden="true"
                />
            </form>
        </>
    )
}

export default ContactForm