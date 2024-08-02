import React from 'react'
import { Outlet } from 'react-router'
import { useHomeContext } from './Homelayout'
import SidebarMerchant from '../components/Sidebar-main-desktop'
import NavMechantMain from '../components/Nav-desktop-merchant'

const DashboardLayout = () => {
    const { user } = useHomeContext()

    return (
        <div className='w-full background-white '>
            <div>
                <NavMechantMain />
            </div>
            <div className='flex'>
                {user?.userRole === 'merchant' && <div>
                    <div className="hidden lg:block">
                        <SidebarMerchant />
                    </div>
                    <div></div>
                </div>}
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout