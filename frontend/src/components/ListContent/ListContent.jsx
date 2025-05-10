import { useState, useEffect } from "react";

const ListContent = () => {
    const [contents, setContents] = useState([]);

useEffect(() => {
  fetch("http://localhost:8000/api/contents/")
    .then((res) => res.json())
    .then((data) => setContents(data));
}, []);

return (
  <div className="grid grid-cols-3 gap-4">
      {contents.map((content) => (
        <div key={content.id} className="p-4 w-1/3">
            <img src={content.url} alt={content.title} className="max-w-80 h-auto rounded-lg"/>
        </div>
      ))}
  </div>
);
}

export default ListContent