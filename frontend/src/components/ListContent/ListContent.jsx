import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListContent = ({ contentType }) => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!contentType) return;

    const url = `http://localhost:8000/api/contents/?content_type=${contentType}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setContents(data.results);
        setLoading(false);
      });
  }, [contentType]);

  if (loading) return <p className="text-center">Cargando contenido...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
      {contents.length > 0 ? (
        contents.map((content) => (
          <div key={content.id} className="p-4 w-full">
          <Link to={`/catalogue/${content.id}`} state={{ content: content }}>
            <div className="relative group">
      <img
        src={content.thumbnail_url}
        alt={content.title}
        className="max-w-120 w-full h-auto rounded-lg object-contain saturate-0 brightness-150 group-hover:saturate-100 group-hover:brightness-100"
      />
      <div className="text-[#343434] text-2xl sm:text-3xl px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {content.title}
      </div>
    </div>
  </Link>
</div>
        ))
      ) : (
          <p className="text-2xl sm:text-3xl xl:text-5xl mt-20 sm:mt-40 xl:mt-60 mx-10 text-center col-span-full">No hay contenido en esta categoría.</p>
      )}
    </div>
  );
};

export default ListContent;
