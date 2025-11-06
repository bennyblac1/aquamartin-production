
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-brand-dark mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
        <div className="mt-auto">
            <p className="text-xl font-semibold text-brand-blue mb-4">
            ${product.price.toFixed(2)} <span className="text-sm font-normal text-gray-500">{product.unit}</span>
            </p>
            <Link 
            to="/order" 
            state={{ selectedProduct: product.id }}
            className="w-full text-center bg-brand-blue text-white font-bold py-3 px-6 rounded-full hover:bg-brand-dark transition-colors duration-300 block"
            >
            Order Now
            </Link>
        </div>
      </div>
    </div>
  );
};


const ProductsPage = () => {
  return (
    <div className="bg-brand-gray py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Our Products</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Hydration for every need. Choose from our range of pure and refreshing water products.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
