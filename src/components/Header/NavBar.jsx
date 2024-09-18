import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import image from './chaicode.png'
function NavBar() {
    return (
        <>
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-purple-400 text-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center ml-10 max-w-screen-xl">


                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <Link to="/" className="flex items-center ">
                                    <img 
                                        src={image}
                                        className="mr-3 h-12"
                                        alt="Logo"
                                    />
                                </Link>

                            <li>

                                
                                <NavLink
                                    to='/'
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    RandomUser
                                </NavLink>
                            </li>
                            <li>

                                <NavLink
                                    to='RandomJokes'
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    RandomJoke
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to='Catlisting'
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    CatListings
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
        </header>

        </>
        
    );
}

export default NavBar