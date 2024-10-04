import React from 'react'
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom'

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn

    return (
        <div className='flex bg-gray-300 text-white justify-around p-3 border-b-2 border-b-black'>

            <div className='text-2xl font-bold justify-center items-center text-center flex text-black'>
                <h1>VED SECUTITY</h1>
            </div>

            <div className='flex justify-center items-center text-center gap-6'>


                {!isLoggedIn &&
                    <Link to="/login">
                        <button
                            className='bg-green-500 p-2 w-20 rounded-full hover:bg-green-600'>
                            Login
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className='bg-blue-500 p-2 w-20 rounded-full hover:bg-blue-600'>
                            SignUp
                        </button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className='text-black font-thin'>
                            Date/Time
                        </button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="#">
                        <button className='underline text-black font-thin'>
                            abc@gmail.com
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className='bg-red-400 text-black p-2 w-24  hover:bg-red-500 rounded-full'>
                            Profile
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/">
                        <button
                            onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logged Out")
                            }}
                            className='bg-red-400 p-2 w-24 text-black hover:bg-red-500 rounded-full'>
                            Logout
                        </button>
                    </Link>
                }

            </div>
        </div>
    )
}

export default Navbar