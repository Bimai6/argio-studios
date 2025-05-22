import Nav from "../../components/Nav/Nav"
import { isEven } from "../../utils/Functions"
import { members } from "../../utils/Arrays"
import { sectionParagraph } from "../../utils/Functions"
import { socialLinks } from "../../utils/Arrays"

const AboutUs = () => {

    const description = `En Argio Studios creemos que la creatividad auténtica no tiene límites.
    Somos un estudio multidisciplinario donde las ideas se transforman en experiencias visuales, sonoras y emocionales. Trabajamos con pasión y estrategia para dar vida a proyectos que conectan: desde visuales potentes hasta narrativas que marcan.
    Cada proyecto es una narrativa única. Lo cultivamos con detalle, lo hacemos crecer con visión y lo lanzamos al mundo con fuerza.
    Nos mueve la innovación, la cultura, la emoción y el deseo de crear algo que trascienda. \n
    Argio Studios: donde el arte se convierte en impacto.`

    return(
        <>
            <div className="flex flex-col place-items-center px-20">
                <div className="flex flex-row justify-center bg-black w-screen">
                    <img src="https://res.cloudinary.com/dr9vuz2td/image/upload/v1747914534/banner_vxlbcw.png" alt="Argio Studios' Banner" className="pt-12 pb-16"/>
                </div>
                <p className="pb-7 pt-20">{description}</p>
                {sectionParagraph("Team", "pb-15")}
                {members.map((member,index) => {
                    return(
                    <div key={index} className={`flex flex-row items-center my-15 ${isEven(index) ? "place-self-start" : "place-self-end"}`}>
                    <img src={member.img} alt={member.name} className={`max-h-150 ${isEven(index) ? "pr-10" : "order-2 pl-10"}`}/>
                    <div className={`flex flex-col my-10 order-1 ${isEven(index) ? "" : "text-end"}`}>
                        <p className="text-[80px] mb-3">{member.name}</p>
                        <p className="text-[60px] mb-3">{member.role}</p>
                        <div className="text-[#D9D9D9] text-5xl">
                            {member.tasks.map((task,index) => {
                                return (<p className="py-3" key={index}>{task}</p>)
                            })}
                        </div>
                    </div>
                </div>
                ) })}
                {sectionParagraph("Social", "pb-25")}
                <div className="flex flex-row justify-between gap-80 text-5xl">
                    {socialLinks.map((socialLink, index) => {
                        return (
                            <a key={index} href={socialLink.link}><p>{socialLink.name}</p></a>
                        )
                    })}
                </div>
                <p className="text-xl pt-10 pb-30">©Argio Studios 2025. Todos los derechos reservados.</p>
            </div>
            <Nav/>
        </>
    )
}

export default AboutUs