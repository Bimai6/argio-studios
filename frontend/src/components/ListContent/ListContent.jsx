import { useState, useEffect } from "react";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {contents.length > 0 ? (
        contents.map((content) => (
          <div key={content.id} className="p-4 w-full">
            <img
              src={content.thumbnail_url}
              alt={content.title}
              className="max-w-120 w-full h-auto rounded-lg object-contain"
            />
          </div>
        ))
      ) : (
        <p className="text-center col-span-full">No hay contenido en esta categoría.</p>
      )}
    </div>
  );
};

export default ListContent;
