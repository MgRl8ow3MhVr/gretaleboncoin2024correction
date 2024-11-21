import React, { useState } from "react";

// source
// https://medium.com/@raedswan121/how-to-upload-image-and-preview-it-using-reactjs-43b27c751255

function SimpleUpload({ loadFiles }) {
  const [file, setFile] = useState([]);

  const handleChange = () => {};

  return (
    <div>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} multiple />
      {file.map((f) => {
        return <img src={f} />;
      })}
    </div>
  );
}

export default SimpleUpload;
