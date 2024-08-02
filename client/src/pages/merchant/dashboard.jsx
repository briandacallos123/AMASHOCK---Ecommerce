import React from 'react'
import RHFTextField from '../../components/RHFTextField'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="pt-20 px-10 w-full">
      <div className="header flex items-center justify-between">
        <h1 className="text-2xl">Dashboard</h1>
        
        <div className="flex items-center justify-between space-x-7">
          <RHFTextField name="search" type="text" placeholder="Search..."/>
          <Link to="../merchant/create-product" className="bg-[#131921] btn text-white px-10">Create</Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard