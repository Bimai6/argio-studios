import { useState, useEffect } from "react";

const ListContent = () => {
    const [contents, setContents] = useState([]);

useEffect(() => {
  fetch("http://localhost:8000/api/contents/")
    .then((res) => res.json())
    .then((data) => setContents(data));
}, []);

return (
  <div className="">
      {contents.map((content) => (
          <img key={content.id} src={content.url} alt={content.title} />
      ))}
  </div>
);
}

export default ListContent