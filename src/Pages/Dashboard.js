import React from 'react'

const Dashboard = () => { 
  return (
    <div className='flex justify-center items-center h-screen gap-32 cursor-pointer bg-gray-300'>
      <div className='bg-red-400 p-24 rounded-3xl text-black font-bold text-2xl text-center'>
        <p>Add</p>
        <p>Employee</p>
      </div>
      <div className='bg-red-400 p-24 rounded-3xl text-black font-bold text-2xl text-center'>
        <p>Employee</p>
        <p>Master</p>
      </div>
      <div className='bg-red-400 p-24 rounded-3xl text-black font-bold text-2xl text-center'>
        <p>Team</p>
        <p>Master</p>
      </div>
    </div>
  )
}

export default Dashboard