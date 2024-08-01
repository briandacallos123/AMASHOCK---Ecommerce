import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import NavMainSearchForm from './Nav-main-search-form'

const NavMobileMain = () => {
  return (
    <div className="bg-[#131921] text-white px-3 py-5 space-y-7">
        <div className="flex items-center justify-between">

            <div className="flex items-center space-x-2">
                <Icon icon="iconamoon:menu-burger-horizontal" fontSize={20}/>
                <h1>Amashock</h1>
            </div>

            <div className='space-x-3 flex items-center'>
                <Link to="../login">Sign in</Link>
                <Icon fontSize={20} icon="mdi:cart"/>
            </div>
        </div>
        <div>
            <NavMainSearchForm placeholder="Search"/>
        </div>
        
    </div>
  )
}

export default NavMobileMain