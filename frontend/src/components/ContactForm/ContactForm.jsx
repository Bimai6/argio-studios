const ContactForm = () => {
    const placeholders = ["nombre completo", "email", "título"];
    const stylesGeneric = "rounded-full my-5 py-4 text-white";
    const stylesTextInput = "bg-[#343434] pl-10 placeholder-white";
    return (
        <>
            <form className="flex flex-col mt-5 mr-5 mb-20 ml-8" action="">
                {placeholders.map((placeholder, index) => (
                    <input className={`${stylesGeneric} ${stylesTextInput}`}
                    key={index} type="text" 
                    placeholder={placeholder} />
                ))}
                <textarea className={`${stylesGeneric} ${stylesTextInput} h-20`} placeholder="mensaje"></textarea>
                <input className={`${stylesGeneric} bg-black mx-25`} type="submit" value="enviar" />
            </form>
        </>
    )
}

export default ContactForm