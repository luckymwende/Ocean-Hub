import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Sustainable Fishing Net',
    price: 15000,
    category: 'Fishing Gear',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Eco-friendly fishing net made from recycled materials by local artisans in Mombasa',
    seller: 'Mombasa OceanGear Co.',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Organic Seaweed Snacks',
    price: 1500,
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Hand-harvested organic seaweed from sustainable farms in Lamu',
    seller: 'Lamu SeaHarvest',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Recycled Ocean Plastic Jewelry',
    price: 2500,
    category: 'Eco Products',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Beautiful jewelry made from recycled ocean plastic by local artisans in Malindi',
    seller: 'Malindi EcoCrafts',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Traditional Dhow Model',
    price: 5000,
    category: 'Marine Art',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250a8b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Handcrafted model of a traditional Kenyan dhow sailing vessel',
    seller: 'Lamu Artisans',
    rating: 4.9,
  },
  // Add more products as needed
];

const categories = ['All', 'Fishing Gear', 'Seafood', 'Eco Products', 'Marine Art'];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Kenya Coastal Marketplace</h1>
        
        {/* Filters */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">{product.name}</a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.seller}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">KES {product.price.toLocaleString()}</p>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
              <div className="mt-2 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : i < product.rating
                          ? 'text-yellow-200'
                          : 'text-gray-200'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
              </div>
              <div className="mt-4">
                <button className="btn-primary w-full">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 