// pages/upload.js
import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
            // Importante definir o cabeçalho correto para enviar arquivos
            'Content-Type': 'multipart/form-data',
          },
        body: formData,
      });

      if (response.ok) {
        console.log('Upload successful!');
      } else {
        console.error('Upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
    </div>
  );
}
