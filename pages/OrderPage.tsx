
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const OrderPage = () => {
  const location = useLocation();
  const { selectedProduct } = (location.state as { selectedProduct?: number }) || {};

  const [productId, setProductId] = useState<string>(selectedProduct?.toString() || '');
  const [quantity, setQuantity] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (productId) {
      const product = PRODUCTS.find((p) => p.id === parseInt(productId));
      if (product) {
        setTotal(product.price * quantity);
      }
    } else {
      setTotal(0);
    }
  }, [productId, quantity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productId || quantity < 1 || !name || !phone || !address) {
        alert('Please fill out all fields correctly.');
        return;
    }
    // In a real app, this would initiate the Paystack payment process.
    // For this static site, we'll just show a success message.
    setIsSubmitted(true);
  };
  
  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductId(e.target.value);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1);
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-xl">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-brand-dark mb-2">Order Received!</h1>
          <p className="text-gray-600">
            Thank you, {name}. Your order has been successfully placed. Our team will contact you shortly on {phone} to confirm payment and delivery details.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="mt-6 bg-brand-blue text-white font-bold py-2 px-6 rounded-full hover:bg-brand-dark transition-colors">
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-gray py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark text-center mb-12">Place Your Order</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl space-y-6">
          <div>
            <label htmlFor="product" className="block text-lg font-medium text-gray-700 mb-2">Select Product</label>
            <select
              id="product"
              value={productId}
              onChange={handleProductChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
            >
              <option value="" disabled>-- Choose a product --</option>
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} - ${p.price.toFixed(2)} {p.unit}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-lg font-medium text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
            />
          </div>
          <hr/>
          <h2 className="text-2xl font-semibold text-gray-800 pt-4">Delivery Details</h2>
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" required/>
          </div>
           <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Phone Number</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" required/>
          </div>
          <div>
            <label htmlFor="address" className="block text-lg font-medium text-gray-700 mb-2">Delivery Address</label>
            <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} rows={3} className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue" required/>
          </div>
          <div className="text-right pt-4">
            <p className="text-3xl font-bold text-brand-dark">
              Total: ${total.toFixed(2)}
            </p>
          </div>
          <button type="submit" className="w-full bg-brand-blue text-white font-bold py-4 px-6 rounded-full text-lg hover:bg-brand-dark transition-colors duration-300 flex items-center justify-center">
            Pay with Paystack
          </button>
          <p className="text-center text-sm text-gray-500">You will be contacted to complete your payment.</p>
        </form>
      </div>
    </div>
  );
};

const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export default OrderPage;
