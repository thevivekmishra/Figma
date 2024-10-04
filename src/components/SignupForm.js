import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { NavLink, useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // after signup navigate to dashboard
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Signup successfully");
        navigate("/dashboard")
    }

    return (
        <div className='flex justify-center items-center h-screen bg-gray-300'>
            <form onSubmit={submitHandler} className="space-y-5 bg-white p-8 rounded-lg w-full max-w-2xl">
                {/* First Name */}
                <div className='flex gap-5 justify-between'>
                    <label className="block w-1/2">
                        <p className="text-gray-700 font-semibold">First Name<sup className="text-red-500">*</sup></p>
                        <input
                            type="text"
                            placeholder="Enter First Name"
                            required
                            name="firstName"
                            value={formData.firstName}
                            onChange={changeHandler}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </label>

                    {/* Last Name */}
                    <label className="block w-1/2">
                        <p className="text-gray-700 font-semibold">Last Name<sup className="text-red-500">*</sup></p>
                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            required
                            name="lastName"
                            value={formData.lastName}
                            onChange={changeHandler}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </label>
                </div>

                {/* Email */}
                <label className="block">
                    <p className="text-gray-700 font-semibold">Email<sup className="text-red-500">*</sup></p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </label>

                {/* Password and Confirm Password */}
                <div className='flex gap-5 justify-between'>
                    <label className="relative block w-1/2">
                        <p className="text-gray-700 font-semibold">Password<sup className="text-red-500">*</sup></p>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter password"
                            required
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute top-10 right-3 cursor-pointer text-gray-500">
                            {showPassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </label>

                    {/* Confirm Password */}
                    <label className="relative block w-1/2">
                        <p className="text-gray-700 font-semibold">Confirm Password<sup className="text-red-500">*</sup></p>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Confirm password"
                            required
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute top-10 right-3 cursor-pointer text-gray-500">
                            {showPassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </label>
                </div>

                {/* Sign Up Button */}
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
