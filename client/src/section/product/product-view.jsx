import React from 'react'
import customFetch from '../../utils/axios';
import { useLoaderData } from 'react-router';
import ListItem from '../home/list-item';

export const loader = async ({ params }) => {

  try {
    const { data: product } = await customFetch.get(`/product/${params?.id}`);

    const { data: productList } = await customFetch.get('/public/product');

    return { product, productList };
  } catch (error) {
    console.log(error);
    return error
  }
}

const ProductView = () => {
  const data = useLoaderData();

  console.log(data);
  const { attachment, title, price, quantity, description, category } = data?.product?.data;

  return (
    <div className="w-[1200px] p-7 mx-auto mt-20 space-y-20">
      <div className="card w-[800px] p-5 mx-auto card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={attachment}
            alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="font-semibold mb-5">₱ {price}</p>
          <h2>Product Details:</h2>
          <p>{description}</p>
          <div className="card-actions  mt-10">
            <button className="btn px-10 btn-outline btn-info">Add to cart</button>
            <button className="btn px-10 bg-[#FFD814]">Buy Now</button>

          </div>
        </div>
      </div>


      <div className="space-y-10">
        <h1 className="text-xl text-gray-400">Other products you may like</h1>
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {data?.productList?.data && data?.productList?.data?.map((item) => (
            <ListItem row={item} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default ProductView