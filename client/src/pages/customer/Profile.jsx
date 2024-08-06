import React from 'react'
import { useLoaderData } from 'react-router';
import customFetch from '../../utils/axios';
import { Form } from 'react-router-dom';
import RHFTextField from '../../components/RHFTextField';

export const loader = async () => {
  try {
      const { data } = await customFetch.get('/user/current-user');
      return data?.data
  } catch (error) {
      return error
  }
}

const Profile = () => {
  const data = useLoaderData()

  console.log(data,'???')
  return (
     <div className="pt-9 px-7 w-full">
            <div className="w-full p-5 space-y-10">
                <h1 className="text-2xl text-gray-500">Profile</h1>
                <Form className="w-full space-y-5 p-2">
                    <RHFTextField label="Name" defaultValue={data?.name} name="name"/>
                    <RHFTextField label="Email" defaultValue={data?.email} name="email"/>
                    <RHFTextField type="password" defaultValue="awdadwadwa" label="Password" name="password"/>
                </Form>
            </div>
        </div>
  )
}

export default Profile