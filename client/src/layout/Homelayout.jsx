import React from 'react'
import NavMainDesktop from '../components/Nav-main-desktop'
import NavMobileMain from '../components/Nav-main-mobile'
import { Outlet } from 'react-router'

const Homelayout = () => {
    return (
        <div>
            <div>
                <div className="hidden lg:block">
                    <NavMainDesktop />
                </div>
                <div className="lg:hidden">
                    <NavMobileMain />

                </div>
            </div>
            <Outlet/>

        </div>
    )
}

export default Homelayout