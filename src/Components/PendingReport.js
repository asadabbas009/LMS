import React from 'react'

const PendingReport = () => {
  return (
    <div className='p-4'>
        <div>
        
        </div>

        <div className='flex justify-center items-center gap-4 mt-4'>
            <button className='bg-green-500 text-white px-4 py-2 rounded-md'>
                Accept
            </button>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md'>
                Reject
            </button>
        </div>
    </div>
  )
}

export default PendingReport