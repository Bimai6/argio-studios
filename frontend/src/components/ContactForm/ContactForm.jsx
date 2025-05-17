import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current.website.value !== '') {
            alert('Detectado envío automatizado. Inténtalo de nuevo.');
            return;
        }

        emailjs.sendForm(
            "service_h19ns5s",    
            "template_m16i9jn",   
            form.current,
            "0a0Ck9woOI2ZR9RZ1"    
        ).then(
            (result) => {
                console.log("Correo enviado:", result.text);
                alert("Correo enviado con éxito");
            },
            (error) => {
                console.error("Error:", error.text);
                alert("Error al enviar el correo");
            }
        );

        e.target.reset();
    };

    const attributes = [
        {placeholder: "nombre completo", name:"full_name"},
        {placeholder: "email", name:"email"},
        {placeholder: "título", name:"title"}
    ];
    const stylesGeneric = "rounded-full my-5 py-4 text-white";
    const stylesTextInput = "bg-[#343434] pl-10 placeholder-white";
    
    return (
        <>
            <form className="flex flex-col mt-5 mr-5 mb-20 ml-8" onSubmit={sendEmail} ref={form}>
                {attributes.map((attribute, index) => (
                    <input className={`${stylesGeneric} ${stylesTextInput}`}
                    key={index} type="text" 
                    placeholder={attribute.placeholder} name={attribute.name} required/>
                ))}
                <textarea className={`${stylesGeneric} ${stylesTextInput} h-20`} placeholder="mensaje" name="message" required></textarea>
                <input className={`${stylesGeneric} bg-black mx-25`} type="submit" value="enviar" />
                <input type="hidden" name="time" value={new Date().toLocaleString()} />
                <input type="text" name="website" style={{ display: 'none' }} autoComplete="off" tabIndex="-1"/>
            </form>
        </>
    )
}

export default ContactForm