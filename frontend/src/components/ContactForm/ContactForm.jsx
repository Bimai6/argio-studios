const ContactForm = () => {
    const placeholders = ["nombre completo", "email", "título", "mensaje"];
    return (
        <>
            <form action="">
                {placeholders.map((placeholder, index) => (
                    <input key={index} type="text" placeholder={placeholder} />
                ))}
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default ContactForm