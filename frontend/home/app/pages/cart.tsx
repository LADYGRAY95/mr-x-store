import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt, FaPlus, FaMinus,FaShoppingCart } from 'react-icons/fa';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  const addToCart = (item: string, price: number, image: string) => {
    const existingItem = cartItems.find((i) => i.name === item);
    if (existingItem) {
      const updatedCartItems = cartItems.map((i) =>
        i.name === item ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { name: item, quantity: 1, price, image }]);
    }
  };

  const removeFromCart = (item: string) => {
    const updatedCartItems = cartItems.filter((i) => i.name !== item);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (item: string) => {
    const updatedCartItems = cartItems.map((i) =>
      i.name === item ? { ...i, quantity: i.quantity + 1 } : i
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (item: string) => {
    const itemToUpdate = cartItems.find((i) => i.name === item);
    if (itemToUpdate) {
      if (itemToUpdate.quantity > 1) {
        const updatedCartItems = cartItems.map((i) =>
          i.name === item ? { ...i, quantity: i.quantity - 1 } : i
        );
        setCartItems(updatedCartItems);
      } else {
        removeFromCart(item);
      }
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleCancel = () => {
    navigate('/');
  };


  return (
    <div className="bg-black">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
      <FaShoppingCart className="mr-4 text-primary" />
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Cart</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.name}
                    className="bg-black shadow-md p-4 rounded-md flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                      </div>
                      <div>
                        <span className="font-semibold">{item.name}</span>
                        <p className="text-gray-500">Price: {item.price}dt</p>
                        <div className="flex items-center mt-2">
                          <button
                            className="text-red-500 hover:text-red-600"
                            onClick={() => decreaseQuantity(item.name)}
                          >
                            <FaMinus />
                          </button>
                          <span className="mx-2 bg-gray-300 text-gray-700 px-2 py-1 rounded-md">
                            {item.quantity}
                          </span>
                          <button
                            className="text-red-500 hover:text-red-600"
                            onClick={() => increaseQuantity(item.name)}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => removeFromCart(item.name)}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {cartItems.length > 0 && (
          <div className="mt-8 flex justify-between items-center">
            <p className="text-lg font-semibold">Total: {totalPrice.toFixed(2)}dt</p>
            <div>
              <button className="mr-4 bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500" onClick={handleCancel}>
                Cancel
              </button>
              <button className="bg-primary text-gray py-2 px-4 rounded hover:bg-secondary">
                Buy
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;