import React from 'react'
import { Icon } from '@iconify/react';
import NavMainSearchForm from './Nav-main-search-form';
import { Link, useLocation } from 'react-router-dom';
import { useHomeContext } from '../layout/Homelayout';

const NavMainDesktop = () => {
    const { user } = useHomeContext();
    const { pathname } = useLocation();

    if (pathname !== '/' && pathname !== '/login' && pathname !== '/register' && !pathname.includes('/product/view')) {
        return
    }

    const handleNavigate = () => {
        let url;
        if(user?.userRole === 'merchant'){
            url =  '/merchant'
        }
        return url;
    }


    console.log(user);
    return (
        <div className="bg-[#131921] p-5">

            <div className="content flex items-center text-white space-x-10">
                <Link to="/" className="nav-logo text-3xl font-bold">Amashock</Link>

                <div className="flex items-center space-x-1">
                    <Icon icon="carbon:location-filled" />
                    <p>Deliver to <span className="font-semibold">Philippines</span></p>
                </div>

                <div className="flex-1">
                    <NavMainSearchForm placeholder="Search..." />
                </div>

                <div className="flex items-center space-x-2">
                    <p>Hello,</p>
                    {!user ? <div className="flex items-center space-x-2">

                        <Link to="../login">Sign in</Link>
                        <p>/</p>
                        <Link to="../register">Sign up</Link>
                    </div> :
                    <p className="capitalize">{user?.name}</p>
                        
                    }

                </div>

                {!user && user?.userRole !== 'merchant' && <div className="flex items-center space-x-2">
                    <p>Cart</p>
                    <Icon fontSize={2} icon="mdi:cart" />

                 
                </div>}
                {user && <div className="dropdown dropdown-end">
                        <Icon tabIndex={0} role="button" className="m-1" icon="mdi:user" fontSize={25}/>
                       
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 py-3 px-5 space-y-5 text-black">
                            <Link to={user?.userRole === 'merchant' && '/merchant'}>
                                <a href="#">Profile</a>
                            </Link>
                            <Link to="/logout">
                                <a href="#">Logout</a>
                            </Link>
                        </ul>
                    </div>}

                 
            </div>

        </div>
    )
}

export default NavMainDesktop