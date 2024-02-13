import React from 'react';

const SimilarProducts = () => {
  // Dummy data for images and descriptions
  const products = [
    { id: 1, image: 'image1.jpg', description: 'Product 1 Description' },
    { id: 2, image: 'image2.jpg', description: 'Product 2 Description' },
    { id: 3, image: 'image3.jpg', description: 'Product 3 Description' },
    { id: 4, image: 'image4.jpg', description: 'Product 4 Description' },
    { id: 5, image: 'image5.jpg', description: 'Product 4 Description' },
    { id: 6, image: 'image1.jpg', description: 'Product 1 Description' },
    { id: 7, image: 'image2.jpg', description: 'Product 2 Description' },
    { id: 8, image: 'image3.jpg', description: 'Product 3 Description' },
    { id: 9, image: 'image4.jpg', description: 'Product 4 Description' },
    { id: 10, image: 'image5.jpg', description: 'Product 4 Description' },

    // Add more products as needed
  ];

  return (
    <div>
    <h3 style={{marginTop:'100px', marginLeft:'25px'}}>
        Similar Products
    </h3>
    <div style={{marginTop : '50px',display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',width:'85vw' }}>
      {products.map((product) => (
        <div key={product.id} style={{ width: '23%', marginBottom: '20px', textAlign: 'center' }}>
          <img src={product.image} alt={`Product ${product.id}`} style={{ width: '100%', borderRadius: '8px' }} />
          <p style={{ marginTop: '8px', fontSize: '14px', color: '#555' }}>{product.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SimilarProducts;