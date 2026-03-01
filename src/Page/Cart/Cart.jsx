/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const updateCart = (newCart) => {
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const handleQuantity = (id, delta) => {
        const updatedCart = cart.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) } : item
        );
        updateCart(updatedCart);
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        updateCart(updatedCart);
    };

    const totalPrice = cart.reduce((acc, item) => acc + (item.discount_price * (item.quantity || 1)), 0);

    return (
        <div className="m-mt_16px">
            <h1 className="text-sm text-start md:text-text_xl lg:py-0 font-bold">Cart</h1>
            <div className="pt-p_16px">
                <div className="lg:flex items-start gap-3">
                    <div className="w-full lg:w-[58%] bg-white border-2">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-4 border-gray-300">
                                    <th className="text-[14.4px] w-6/12 font-bold p-[7px]">Course</th>
                                    <th className="text-[14.4px] font-bold p-[7px]">Price</th>
                                    <th className="text-[14.4px] font-bold p-[7px]">Quantity</th>
                                    <th className="text-[14.4px] font-bold p-[7px]">Sub Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id} className="border-b border-gray-300">
                                        <td>
                                            <div className="flex items-center">
                                                <div className="w-[20%] text-center">
                                                    <RiDeleteBin5Line
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-xl hover:text-red-500 cursor-pointer mx-auto"
                                                    />
                                                </div>
                                                <div className="flex flex-col items-center py-2 w-[80%]">
                                                    <img className="h-[40px] w-[70px] object-cover" src={item.photo} alt={item.course_name} />
                                                    <p className="text-[14.4px] text-center">
                                                        {item.course_name}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center font-bold">৳{item.discount_price}</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <button onClick={() => handleQuantity(item.id, -1)} className="border px-2">-</button>
                                                <input readOnly value={item.quantity || 1} className="w-[40px] text-center border-y" />
                                                <button onClick={() => handleQuantity(item.id, 1)} className="border px-2">+</button>
                                            </div>
                                        </td>
                                        <td className="text-center font-bold">
                                            ৳{item.discount_price * (item.quantity || 1)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="lg:w-[41%] bg-white border-2 p-5">
                        <h2 className="font-bold text-text_medium border-b-2 border-black pb-2">Cart Summary</h2>
                        <div className="py-3 flex justify-between">
                            <p className="font-bold">Total Price</p>
                            <p className="font-bold">৳{totalPrice}</p>
                        </div>
                        <Link to="/cart/checkout" className="bg-black text-white py-2 w-full block text-center hover:bg-gray-800">
                            PROCEED TO CHECKOUT
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
