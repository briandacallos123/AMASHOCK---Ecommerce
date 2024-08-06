import React, { useCallback, useEffect, useState } from 'react'
import customFetch from '../../utils/axios';
import { useLoaderData } from 'react-router';
import { Icon } from '@iconify/react';


export const loader = async () => {
  // try {
  //   const { data } = await customFetch.get('/orders/customer');
  //   return data?.data;
  // } catch (error) {
  //   console.log(error);
  //   return error
  // }
  return null
}

const Orders = () => {
  const [tableData, setTableData] = useState([])
  const [filtering, setFiltering] = useState({
    take: 5,
    skip: 0
  })

  const fetchData = async () => {
    try {
      const { data } = await customFetch.post('/orders/customer',{
        skip:filtering?.skip,
        take:filtering?.take
      });
      return data?.data;
    } catch (error) {
      console.log(error);
      return error
    }
  }

  useEffect(() => {
    fetchData().then((res) => {
      setTableData(res)
    })
  }, [filtering.take, filtering.skip])

  const handleNext = useCallback(()=>{
    setFiltering((prev)=>{
      return {
        ...prev,
        skip:prev?.skip + 5
      }
    })
  },[])

  const handlePrev = useCallback(()=>{
    if(filtering?.skip !== 0){
      setFiltering((prev)=>{
        return {
          ...prev,
          skip:prev?.skip - 5
        }
      })
    }
  },[filtering.skip])


  const RenderMobile = () => {
    return (
      <div className="overflow-auto w-full mr-10 h-auto bg-slate-100 pb-7">
        <table className="table table-zebra  min-h-[200px] ">
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Name</th>
              <th>Total</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>

            {tableData?.map((item) => (
              <tr key={item?._id} className="z-50">
                <td>
                  <div className=" flex items-center space-x-2 ">
                    <div className="w-10  ">
                      <img src={item?.attachment} className='rounded-full w-full h-full object-contain' />
                    </div>
                    <div className="flex flex-col">
                      <p className="capitalize font-bold">{item?.productName}</p>
                      <p>{item?.quantity} x {item?.price}</p>

                    </div>
                  </div>
                </td>

                <td>{item?.value}</td>
                <td align="center">

                  <div className="dropdown dropdown-end">
                    <Icon tabIndex={0} role="button" icon="fa6-solid:ellipsis-vertical" fontSize={20} />

                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                      <li><a className="text-green-600">
                        <Icon icon="mdi:eye" fontSize={20} />
                        View</a></li>

                    </ul>
                  </div>

                </td>
              </tr>
            ))}



          </tbody>
        </table>
        <div className="join mt-2 grid grid-cols-2">
          <button onClick={handlePrev} className={`join-item btn btn-outline ${filtering?.skip === 0 && 'btn-disabled'}`}>Previous page</button>
          <button onClick={handleNext} className="join-item btn btn-outline">Next</button>
        </div>
      </div>
    )
  }


  return (
    <div className="pt-9 px-7 w-full">
      <div className="space-y-5  ">
        <h1 className="text-2xl text-gray-500">Orders</h1>
        <div className="lg:hidden w-full">
          {tableData?.length !== 0 ? <RenderMobile /> : <h1 className="text-3xl text-gray-400">No Orders!</h1>}

        </div>
      </div>
    </div>
  )
}

export default Orders