'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);


  let CartItemCount = () =>{
    return cartItems.reduce((total, item) => total + (item.count || 1), 0);
  }

  const clearButton = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };
  let totalprice = () =>{
    if( cartItems.length > 0)
    {
      return cartItems.reduce((total, item) => total += +item.price, 0)
    }
  }

  return (
    <div className='mx-64 my-10'>
      {cartItems.length === 0 ? (
        <p className='text-center text-lg'>
          <Link href='/catalog'>
            Ваша корзина пуста. Перейти к покупкам
          </Link>
        </p>
      ) : (
        <ul className='space-y-4'>
          {cartItems.map((item, index) => (
            <li key={index} className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md p-4">
              <Image
                className="rounded-lg mb-4 md:mb-0"
                src={item.image}
                alt={item.model}
                width={200}
                height={200}
              />
              <div className="md:ml-4 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.model}</p>
                <p className="text-lg font-semibold text-gray-800">${item.price}</p>
                <button
                  onClick={() => removeItem(index)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
                >
                  Удалить
                </button>
                <button className='mt-4 ml-4 bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200' >
                  Заказать
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className='flex justify-left mt-10'>
        {cartItems.length > 0 && (
          <button
            onClick={clearButton}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            Очистить корзину
          </button>
        )}
      </div>
        <div className='flex justify-center mt-10' >
          {cartItems.length > 0 && (

            <button
            className='bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200'
            >
          К оформлению
        <p className='text-sm' >{CartItemCount()} | {totalprice()}$</p>
        </button>
        )}
        </div>
    </div>  
  );
};

export default Cart;