import { useLocation, useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import Nav from "../../components/Nav/Nav";
import mediumZoom from 'medium-zoom';

const ContentDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const imageRef = useRef(null);

    const handleBack = () => {
        navigate(-1);
    };

    const content = location.state?.content;

    const isNotVideo = content?.content_type !== 0;

    useEffect(() => {
        if (isNotVideo && imageRef.current) {
            const zoom = mediumZoom(imageRef.current, {
                background: 'rgba(0, 0, 0, 0.8)', 
                margin: 24
            });

            return () => zoom.detach(); 
        }
    }, [isNotVideo]);

    if (!content) {
        return <p>Contenido no disponible actualmente, disculpe las molestias</p>;
    }

    const urlElement = isNotVideo ? (
        <img
            ref={imageRef}
            src={content.thumbnail_url}
            alt={content.alt}
            className="zoomable md:w-5/10 lg:w-4/10 max-h-screen object-contain rounded-lg place-self-center cursor-zoom-in"
        />
    ) : (
        <iframe 
            className="w-8/10 h-[250px] sm:w-8/10 sm:h-[300px] md:w-5/10 md:h-[420px] lg:w-5/10 lg:h-[475px] rounded-lg place-self-center"
            src={content.url}
            allowFullScreen
        />
    );

    return (
        <>
            <div 
            className="min-h-screen flex flex-col md:flex-row max-w-full p-4 gap-4"
            aria-label={`Página con los detalles del contenido ${content.title}`} 
            >
                {urlElement}
                <div className={`flex-1 flex flex-col overflow-hidden text-right ${urlElement === isNotVideo ? "" : "ml-10"} md:ml-15 mr-3 text-[#343434]`}>
                    <button
                        className="mt-5 mb-20 md:mb-10 order-2 md:order-1 text-3xl self-end justify-self-start rounded-full px-5 py-3 border-2 border-[#343434] hover:text-white hover:bg-[#343434]"
                        onClick={handleBack}
                        aria-label="Botón de volver a la página del Catálogo"
                    >
                        &lt;
                    </button>
                    <div className="order-1 md:order-2 mb-2">
                        <h1 className="text-start text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mt-5 md:mt-1 mb-9">{content.title}</h1>
                        <h2 className="text-start text-sm md:text-sm lg:text-lg xl:text-xl">{content.description}</h2>
                    </div>
                </div>
            </div>
            <Nav />
        </>
    );
};

export default ContentDetails;
