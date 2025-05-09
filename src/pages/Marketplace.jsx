import React from 'react';

const products = [
  {
    id: 1,
    name: 'Lamu Sea Shell Jewelry',
    price: 2499,
    description: 'Handcrafted jewelry made from sustainable sea shells collected from Lamu beaches',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Local Crafts'
  },
  {
    id: 2,
    name: 'Mombasa Coconut Bowls',
    price: 1999,
    description: 'Traditional coconut bowls handcrafted by Mombasa artisans using sustainable methods',
    image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Local Crafts'
  },
  {
    id: 3,
    name: 'Malindi Marine Conservation Kit',
    price: 3499,
    description: 'Complete kit for beach cleanup and marine conservation activities in Malindi',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Conservation'
  }
];

function Marketplace() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-ocean-blue-600 mb-6">Kenya Coastal Marketplace</h1>
      <p className="text-gray-600 mb-8">
        Support local coastal communities by purchasing authentic Kenyan coastal products. A portion of all sales goes towards ocean conservation initiatives in Kenya.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-sm text-ocean-blue-500 font-semibold mb-2">{product.category}</div>
              <h3 className="text-xl font-semibold text-ocean-blue-600">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-ocean-blue-500">KES {product.price}</span>
                <button className="bg-ocean-blue-500 text-white px-4 py-2 rounded hover:bg-ocean-blue-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace; 