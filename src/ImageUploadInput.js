import React, { useEffect, useState } from 'react';
import './ImageUploadInput.css';

function ImageUploadInput({ src_img, id, updateImage }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
  };

  return (
    <label className='label-image-upload-input'>
        <input
          type='file'
          onChange={handleImageChange}
          accept='image/*'
          className='image-upload-input'
          id={id}
        />
        {imageUrl ? (
          <img 
            src={imageUrl}
            alt='uploaded-image'
            className='uploaded-image'
          />
        ) : (
          <div className='not-uploaded-plus-div'>
            <span className='not-uploaded-plus-span'>+</span>
          </div>
        )}
    </label> 
  );
};

export default ImageUploadInput;
