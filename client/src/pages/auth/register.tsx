import React from 'react'
import { Form, Link } from 'react-router-dom'
import RHFTextField from '../../components/RHFTextField'

const Register = () => {
  return (
    <div className="lg:max-w-[500px] mx-auto space-y-10 pt-10">
      <h1 className="text-2xl text-gray-400">Sign In</h1>
      <div className="bg-white p-10">


        <Form method="post" className="space-y-5 mb-5">
          <RHFTextField label="First and Last Name" name="name" type="text" required placeholder="Search..." />
          <RHFTextField label="Email" name="email" type="email" required placeholder="your email..." />
          <RHFTextField label="Password" name="password" type="password" placeholder="**********" required />
          <button className="bg-[#FFD814] w-full py-3 px-5 rounded-lg" type="submit">Continue</button>

        </Form>

        <div>
          <p>Already have an account? <Link to="../login" className="text-blue-700 hover:underline">Sign in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register