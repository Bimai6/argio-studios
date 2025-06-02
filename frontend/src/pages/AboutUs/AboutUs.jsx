import Nav from "../../components/Nav/Nav"
import { isEven } from "../../utils/Functions"
import { aboutUsParagraph, members } from "../../utils/Arrays"
import { sectionParagraph } from "../../utils/Functions"
import { socialLinks } from "../../utils/Arrays"

const AboutUs = () => {

    return(
        <>
            <div data-testid="page-about-us" className="flex flex-col place-items-center px-20">
                <div className="flex flex-row justify-center bg-black w-screen">
                    <img src="https://res.cloudinary.com/dr9vuz2td/image/upload/v1747914534/banner_vxlbcw.png" alt="Argio Studios' Banner" className="pt-12 pb-16"/>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl pb-7 pt-20">
                    {aboutUsParagraph.map((item, index) => {
                        return(
                            <>
                                <p key={index}>{item.text}</p> <br />
                            </>
                        )
                    })}
                </div>
                {sectionParagraph("Team", "pb-15")}
                {members.map((member,index) => {
                    return(
                    <div key={index} className={`flex flex-col xl:flex-row items-center mt-15 x:mb-15 ${isEven(index) ? "place-self-start" : "place-self-end"}`}>
                    <img src={member.img} alt={member.name} className={`max-h-150 ${isEven(index) ? "xl:pr-10" : "xl:order-2 xl:pl-10"}`}/>
                    <div className={`flex flex-col my-10 xl:order-1 ${isEven(index) ? "" : "text-end"}`}>
                        <p className="text-4xl sm:text-[45px] md:text-[60px] xl:text-[80px] mb-3">{member.name}</p>
                        <p className="text-2xl sm:text-4xl md:text-[45px] xl:text-[60px] mb-3">{member.role}</p>
                        <div className="text-[#D9D9D9] text-xl sm:text-2xl md:text-4xl xl:text-5xl">
                            {member.tasks.map((task,index) => {
                                return (<p className="py-3" key={index}>{task}</p>)
                            })}
                        </div>
                    </div>
                </div>
                ) })}
                {sectionParagraph("Social", "xl:pb-25 md:pb-20 pb-10")}
                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-40 xl:gap-80 text-xl sm:text-2xl md:text-4xl xl:text-5xl">
                    {socialLinks.map((socialLink, index) => {
                        return (
                            <a key={index} href={socialLink.link}><p>{socialLink.name}</p></a>
                        )
                    })}
                </div>
                <p className="text-xs md:text-md xl:text-xl pt-10 pb-30">©Argio Studios 2025. Todos los derechos reservados.</p>
            </div>
            <Nav/>
        </>
    )
}

export default AboutUs