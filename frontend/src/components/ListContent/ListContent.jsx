import { useState, useEffect } from "react";

const ListContent = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/contents/")
      .then((res) => res.json())
      .then((data) => setContents(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {contents.map((content) => (
        <div key={content.id} className="p-4 w-full">
          <img
            src={content.url}
            alt={content.title}
            className="max-w-80 w-full h-auto rounded-lg object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default ListContent;
