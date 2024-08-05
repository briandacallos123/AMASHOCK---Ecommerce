import { Icon } from '@iconify/react';
import React from 'react'
import { Link } from 'react-router-dom';

const CheckOutItem = ({onIncrement, row, onDecrement}) => {
    const { attachment,quantity, category, price, title, description, _id } = row;

    return (
        <div className="bg-base-100 px-5 py-4 w-full h-auto flex flex-row sm:space-y-5 overflow-hidden">
            <p className="cursor-pointer h-40 sm:h-[60%]">
                <img src={attachment} className="w-full h-full object-contain" alt={title} />
            </p>
            <div className='flex flex-col space-y-3 lg:space-y- p-2  flex-1 h-full'>
                <div>
                    <p className="cursor-pointer capitalize font-semibold text-lg truncate">
                        {title}
                    </p>
                    <div className="rating rating-xs">
                        {Array.from({ length: 5 }, (_, index) => (
                            <input
                                key={index}
                                type="radio"

                                className="mask mask-star-2 bg-orange-400"
                            />
                        ))}
                    </div>
                </div>
                <p className="text-sm truncate">{description}</p>
                <div className="badge badge-outline p-2 mt-auto">₱ {price}</div>

                <div className="flex items-center w-full  justify-center space-x-5 bg-gray-50 rounded-2xl">
                    <p onClick={onDecrement} className="font-bold text-xl  px-2">-</p>
                    <p className="font-bold text-lg">{quantity}</p>
                    <p onClick={onIncrement} className="font-bold text-xl  px-2">+</p>
                </div>
            </div>

            <div className="dropdown dropdown-end">
                {/* <div tabIndex={0} role="button" className="btn m-1">Click</div> */}
                <Icon tabIndex={0} role="button" icon="la:ellipsis-v" fontSize={22}/>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                    <li><Link to={`/product/view/${_id}`} className="text-green-400">
                        <Icon icon="mdi:eye"  fontSize={22}/>
                        View</Link></li>
                    <li><Link className="text-red-500">
                        <Icon icon="ic:baseline-delete" fontSize={22}/>
                        Delete</Link></li>
                </ul>
            </div>

            {/* avocadoria */}
        </div>
    )
}

export default CheckOutItem