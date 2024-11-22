import React, { useState } from "react";

// source
// https://medium.com/@raedswan121/how-to-upload-image-and-preview-it-using-reactjs-43b27c751255

function SimpleUpload({ setPhotos }) {
  const [previews, setPreviews] = useState([]);

  const handleChange = (event) => {
    const filesArray = Array.from(event.target.files);
    const previewsArray = filesArray.map((f) => URL.createObjectURL(f));
    setPhotos(filesArray);
    setPreviews(previewsArray);
  };

  return (
    <div>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} multiple />
      {previews.map((f, i) => {
        return <img key={i} src={f} />;
      })}
    </div>
  );
}

export default SimpleUpload;
