import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

    const location = useLocation();

    const navItems = [
        {link : '/about-us', content: 'sobre nosotros'},
        {link : '/', content: 'principal'},
        {link : '/contact', content: 'contacto'}
    ]

    return (
        <>
        <nav className="fixed bottom-0 left-0 w-full h-[80px] z-50 px-4">
            <ul className="flex flex-row justify-between gap-4">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link} className={`py-2 px-4 rounded-4xl ${location.pathname === "/" ? "text-white bg-[#343434]" : "bg-[#D9D9D9]"}`}>
                            {item.content}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </>
    )
}

export default Nav