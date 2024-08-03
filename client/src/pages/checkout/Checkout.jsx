import React from 'react'
import { useNavigate } from 'react-router';
import { useCartContext } from '../../context/cartContext'
import CheckOutItem from './list-item';
import { useHomeContext } from '../../layout/Homelayout';

const Checkout = () => {
    const {state} = useCartContext();
    const navigate = useNavigate();
    const {user} = useHomeContext()

    const onNavigate = () => {
        if(!user){
            navigate('/login')
        }
    }

  return (
    <div className="grid grid-cols-1 w-full py-5 px-2 space-y-10">
        <button onClick={onNavigate} className="btn-c text-lg text-white bg-[#F3A847] rounded-2xl">Proceed to checkout ({state?.totalItem} item{state?.totalItem > 1 && "s"})</button>


        {state?.cart?.map((item)=>(
            <CheckOutItem key={item?._id} row={item}/>
        ))}
    </div>
  )
}

export default Checkout