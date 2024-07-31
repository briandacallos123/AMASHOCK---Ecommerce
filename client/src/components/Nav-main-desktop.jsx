import React from 'react'
import { Icon } from '@iconify/react';
import NavMainSearchForm from './Nav-main-search-form';
import { Link } from 'react-router-dom';

const NavMainDesktop = () => {
  return (
    <div className="bg-[#131921] p-5">

        <div className="content flex items-center text-white space-x-10">
            <h1 className="nav-logo text-3xl font-bold">Amashock</h1>

            <div className="flex items-center space-x-1">
                <Icon icon="carbon:location-filled"/>
                <p>Deliver to <span className="font-semibold">Philippines</span></p>
            </div>
            
            <div className="flex-1">
             <NavMainSearchForm placeholder="Search..."/>
            </div>
            
            <div className="flex items-center space-x-2">
                <p>Hello,</p>
                <Link>Sign in</Link>
                <p>/</p>
                <Link>Sign up</Link>

            </div>

            <div className="flex items-center space-x-2">
                <p>Cart</p>
                <Icon fontSize={23} icon="mdi:cart"/>
            </div>
        </div>

    </div>
  )
}

export default NavMainDesktop