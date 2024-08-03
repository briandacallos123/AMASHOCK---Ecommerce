import { Icon } from '@iconify/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavMainSearchForm from './Nav-main-search-form'
import { useHomeContext } from '../layout/Homelayout'
import { useCartContext } from '../context/cartContext'

const NavMobileMain = () => {
    const {user} = useHomeContext();
    const {state} = useCartContext();
    const navigate = useNavigate()

    const handleNavigate =() => {
        if(state?.totalItem !== 0) navigate('/product/checkout')
    }

  return (
    <div className="bg-[#131921] text-white px-3 py-5 space-y-7">
        <div className="flex items-center justify-between">

            <div className="flex items-center space-x-2 inline-block">
                <Icon icon="iconamoon:menu-burger-horizontal" fontSize={20}/>
                <Link to="/" className="text-xl">Amashock</Link>
            </div>

            <div className='space-x-3 flex items-center'>
                {!user ? <Link to="../login">Sign in</Link>:
                <div className="flex items-end space-x-1">
                    {/* <p className="text-sm font-light">Hi, </p> */}
                    <h1 className="capitalize">{user?.name}</h1>
                </div>}
                <div onClick={handleNavigate} className="relative">
                    <Icon fontSize={20} icon="mdi:cart"/>
                    <p  className="absolute -top-5 left-1 font-bold text-[#F3A847]">
                        {state?.totalItem !== 0 && state?.totalItem}
                    </p>
                </div>
            </div>
        </div>
        <div>
            <NavMainSearchForm placeholder="Search"/>
        </div>
        
    </div>
  )
}

export default NavMobileMain