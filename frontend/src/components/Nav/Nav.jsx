import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const navItems = [
        { link: "/about-us", content: "argio", justify: "justify-start pl-4" },
        { link: "/", content: "principal", justify: "justify-center" },
        { link: "/contact", content: "contacto", justify: "justify-end pr-4" }
    ];

    return (
        <>
            <nav className="fixed bottom-0 left-0 w-screen h-[110px] px-4">
                <ul className="grid grid-cols-3 w-full h-full text-center">
                    {navItems.map((item, index) => {
                        const defaultLink = (
                            <Link
                                to={item.link}
                                className={`py-3 ${item.content === "argio" ? "px-8": "px-4"} rounded-4xl text-xs sm:text-xl md:text-2xl xl:text-4xl  ${
                                    isHome ? "text-white bg-[#343434]" : "bg-[#D9D9D9]"
                                }`}
                            >
                                {item.content}
                            </Link>
                        );

                        return (
                            <li key={index} className={`flex items-center ${item.justify}`}>
                                {item.link === "/" && isHome ? null : defaultLink}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Nav;
