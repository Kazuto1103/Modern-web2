// File: src/pages/ProductDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  // Ambil parameter 'id' dari URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Data produk dummy (harus sama dengan yang ada di Products.jsx)
  const products = [
    { id: 1, name: 'Laptop', price: 12000000, category: 'Electronics', description: 'Laptop canggih untuk produktivitas maksimal.' },
    { id: 2, name: 'Smartphone', price: 5000000, category: 'Electronics', description: 'Smartphone terbaru dengan kamera berkualitas tinggi.' },
    { id: 3, name: 'Headphones', price: 800000, category: 'Electronics', description: 'Headphone nirkabel dengan kualitas audio jernih.' },
    { id: 4, name: 'Book', price: 150000, category: 'Education', description: 'Buku panduan lengkap React Router.' },
    { id: 5, name: 'Desk Lamp', price: 300000, category: 'Home', description: 'Lampu meja LED minimalis.' },
  ];

  // Cari produk berdasarkan id (ingat, id dari useParams adalah string)
  const product = products.find(p => p.id === parseInt(id));

  // Jika produk tidak ditemukan
  if (!product) {
    return (
      <div className="page product-detail-page">
        <h1>Produk Tidak Ditemukan (404)</h1>
        <p>Maaf, produk dengan ID **{id}** tidak tersedia.</p>
        <button className="btn btn-primary" onClick={() => navigate('/products')}>
          &larr; Back to Products
        </button>
      </div>
    );
  }

  // Tampilan jika produk ditemukan
  return (
    <div className="page product-detail-page">
      <h1>Detail: {product.name}</h1>
      <div className="detail-content">
        <p><strong>ID Produk:</strong> {product.id}</p>
        <p><strong>Kategori:</strong> {product.category}</p>
        <p><strong>Harga:</strong> Rp {product.price.toLocaleString('id-ID')}</p>
        <p><strong>Deskripsi:</strong> {product.description}</p>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;