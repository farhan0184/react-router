import React from 'react';
import {  NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-12 mb-5 bg-slate-200 shadow-lg fixed top-0 w-full truncate'>
            <nav className='flex justify-between items-center h-10 mx-5'>
                <h1 className='text-3xl italic text-gray-700'>ReactRoute</h1>
                <div>
                    <ul className='text-xl italic text-gray-700 flex gap-4'>
                        {/* <Link to="/">Home</Link>
                        <Link to="/friends">Friends</Link>
                        <Link to="/about">AboutUs</Link> */}
                        {/* custom link */}
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? '#831843' : '#334155' })}>
                            Home
                        </NavLink>
                        <NavLink to="/friends" style={({ isActive }) => ({ 
                            color: isActive ? '#831843' : '#334155' })}>
                            Friends
                        </NavLink>
                        <NavLink to="/posts" style={({ isActive }) => ({ 
                            color: isActive ? '#831843' : '#334155' })}>
                            Posts
                        </NavLink>
                        <NavLink to="/countries" style={({ isActive }) => ({ 
                            color: isActive ? '#831843' : '#334155' })}>
                            Countries
                        </NavLink>
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? '#831843' : '#334155' })}>
                            AboutUs
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;