import React from 'react'

const SelectedCourse = ({selectedCourseItems}) => {
  return (
    <div className='lg:w-1/4 md:w-1/4'>
      <div className='bg-white overflow-hidden px-6  rounded-xl'>
          <h1 className='mt-6 mb-4 text-[20px] font-semibold text-center text-[#2F80ED]'>Credit Hour Remaining 7 hr</h1>
          <hr />
          <h1 className='text-xl font-bold my-3'>Course Name</h1>
          <ol className='px-4'>
              {
                selectedCourseItems.map((item) => <li className='text-lg mb-1 list-decimal text-[#1c1b1b99]' key={item.id}>{item.title}</li>)
              }
          </ol>
          <hr className='mt-3' />
          <h2 className='text-base font-medium my-4'>Total Credit Hour:</h2>
          <hr />
          <h2 className='text-base font-semibold my-3'>Total Price: </h2>
      </div>
    </div>
  )
}

export default SelectedCourse