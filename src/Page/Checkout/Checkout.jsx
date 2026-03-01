import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Checkout = () => {
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
        <div className="  mt-5 border mx-2">
            <div class="bg-[#6f42c1] text-white p-6 text-center mb-5">
                <h2 className='text-5xl font-bold'>Trainee Admission Form</h2>
            </div>
            <form className="bg-white shadow-md rounded-lg p-6">
                {/* Trainee Information Section */}
                <div className="form-section">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="fullName" className="block font-semibold text-base mb-2">Full Name:</label>
                            <input
                                type="text"
                                id="fullName"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="formNo" className="block font-semibold text-base mb-2">Form no:</label>
                            <input
                                type="text"
                                id="formNo"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="parentName" className="block font-semibold text-base mb-2">Father/Mother Name:</label>
                            <input
                                type="text"
                                id="parentName"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="parentNumber" className="block font-semibold text-base mb-2">Number:</label>
                            <input
                                type="text"
                                id="parentNumber"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="school" className="block font-semibold text-base mb-2">School/College:</label>
                            <input
                                type="text"
                                id="school"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="jobInfo" className="block font-semibold text-base mb-2">Job Information:</label>
                            <input
                                type="text"
                                id="jobInfo"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="email" className="block font-semibold text-base mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="gender" className="block font-semibold text-base mb-2">Gender:</label>
                            <select
                                id="gender"
                                className="w-full border border-gray-300 rounded-md p-2"
                            >
                                <option value="" disabled selected>Select Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Others">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="presentAddress" className="block font-semibold text-base mb-2">Present Address:</label>
                            <textarea
                                id="presentAddress"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="permanentAddress" className="block font-semibold text-base mb-2">Permanent Address:</label>
                            <textarea
                                id="permanentAddress"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="nid" className="block font-semibold text-base mb-2">NID Number:</label>
                            <input
                                type="text"
                                id="nid"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block font-semibold text-base mb-2">Mobile No:</label>
                            <input
                                type="text"
                                id="mobile"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="guardianName" className="block font-semibold text-base mb-2">Local Guardian’s Name:</label>
                            <input
                                type="text"
                                id="guardianName"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block font-semibold text-base mb-2">Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                className="w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="bloodGroup" className="block font-semibold text-base mb-2">Blood Group:</label>
                            <select
                                id="bloodGroup"
                                className="w-full border border-gray-300 rounded-md p-2"
                            >
                                <option value="" disabled selected>Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="m-mt_16px">


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
                            <div className="lg:w-[41%] bg-white border-2 ">
                                <div className="px-[30px]">
                                    <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
                                        Cart Summary
                                    </h2>
                                    <div className="py-3 flex justify-between border-b border-gray-300">
                                        <p className="text-black font-bold">Total Price</p>
                                        <p className="text-black font-bold">

                                        </p>
                                    </div>

                                    <Link

                                        state={"bdt"}
                                        className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full"
                                    >
                                        Submit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

           
        </div>
    );
};

export default Checkout;
