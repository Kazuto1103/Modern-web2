// File: src/pages/NotFound.jsx
import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  // Hook untuk mengambil detail error dari React Router
  const error = useRouteError();
  console.error(error);

  return (
    <div className="page not-found-page" style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>404 Not Found &#128549;</h1>
      <p>
        Maaf, halaman yang Anda cari tidak ditemukan.
      </p>
      {/* Tampilkan detail error jika ada (berguna untuk debugging) */}
      <p style={{ color: 'red', marginTop: '20px' }}>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="btn btn-primary" style={{ marginTop: '20px' }}>
        Go to Homepage
      </a>
    </div>
  );
};

export default NotFound;