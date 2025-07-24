import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListContent = ({ contentType }) => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!contentType) return;
    
    const url = `${import.meta.env.VITE_API_URL}/api/contents/?content_type=${contentType}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setContents(data.results);
        setLoading(false);
      });
  }, [contentType]);

  return (
    <section aria-label={`Lista de contenidos para ${contentType}`}>
      {loading ? (
        <p className="text-center" role="status" aria-live="polite">Cargando contenido...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {contents.length > 0 ? (
            contents
            .sort((a,b) => a.grid_order - b.grid_order)
            .map((content) => (
              <li 
              key={content.id} 
              className="p-4 w-full"
              >
                <Link
                  to={`/catalogue/${content.id}`}
                  state={{ content }}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  <div className="group relative">
                    <img
                      src={content.thumbnail_url}
                      alt={content.alt}
                      className="max-w-120 w-full h-auto rounded-lg object-contain saturate-0 brightness-150 group-hover:saturate-100 group-hover:brightness-100 group-focus:saturate-100 group-focus:brightness-100"
                    />
                    <div className="bg-white bg-opacity-75 text-[#343434] text-2xl sm:text-3xl px-2 py-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 right-0">
                      {content.title}
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <p
              className="text-2xl sm:text-3xl xl:text-5xl mt-20 sm:mt-40 xl:mt-60 mx-10 text-center col-span-full"
              role="status"
              aria-live="polite"
            >
              No hay contenido en esta categoría.
            </p>
          )}
        </ul>
      )}
    </section>
  );
};

export default ListContent;
