import React from 'react'
import { Link } from 'react-router-dom';

const ListItem = ({ row }) => {
    const { attachment, category, price, title, description,_id } = row;

    return (
        <div className="card bg-base-100 sm:w-60 shadow-xl pt-2 ">
            <figure>
                <img
                    className="w-[80px] lg:w-[150px]"
                    src={attachment}
                    alt={title} />
            </figure>
            <div className="card-body space-y-1">
                <Link to={`/product/view/${_id}`} className="card-title hover:underline hover:text-blue-600"> {title}</Link>
                <p>{description}</p>
                <div className="flex flex-col items-start space-y-3 lg:flex-row lg:items-center lg:justify-between">
                   
                         <div className="badge badge-outline">₱ {price}</div>
                        <button className="py-1 px-2 rounded-lg bg-[#FFD814]">Buy Now</button>
                   
                </div>
            </div>
        </div>
    )
}

export default ListItem