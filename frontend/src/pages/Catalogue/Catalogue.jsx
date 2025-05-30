import { useLocation, useNavigate } from "react-router-dom";
import ListContent from "../../components/ListContent/ListContent";
import Nav from "../../components/Nav/Nav";
import {filterItems} from "../../utils/Arrays";

const Catalogue = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const contentType = params.get("content_type") || "0";

    const handleChange = (value) => {
        navigate(`/catalogue?content_type=${value}`);
    };

    return (
    <>
        <div data-testid="page-catalogue" className="ml-10 sm:ml-0 flex flex-col items-start sm:flex-row sm:justify-between p-4">
            {filterItems.map((item) => (
                <button
                key={item.value}
                onClick={() => handleChange(item.value)}
                className={`px-4 py-2 text-2xl sm:text-xl md:text-2xl xl:text-4xl ${
                contentType === item.value ? "rounded-4xl bg-[#343434] text-white" : ""
                }`}
                >
                {item.label}
                </button>
            ))}
        </div>
        <div className="flex flex-col items-center w-full h-full">
            <ListContent contentType={contentType} />
        </div>
        <Nav />
    </>
    );
};

export default Catalogue;
