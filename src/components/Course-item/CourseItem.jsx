import React from 'react'
import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';


const CourseItem = ({course, handleSelect}) => {
  return (
        <div className="bg-white rounded-xl p-3">
            <div className='flex justify-center'><img className='w-full' src={course.image} alt="Shoes" /></div>
            <div>
                <h2 className=" my-2 card-title">{course.title}</h2>
                <p className='text-[#1c1b1b99] text-[15px] mb-3'>{course.description}</p>
            </div>
            <div className='text-[#1c1b1b99] px-1 my-2 flex justify-between'>
                <div className='flex items-center gap-2'><FiDollarSign className='text-black text-xl' /> <p>$Price: {course.price}</p></div>
                <div className='flex items-center gap-2'><BsBook className='text-black text-xl' /> <p>Credit: {course.Credit}hr</p></div>
            </div>
            <button onClick={() => handleSelect(course)} className='w-full mt-3 py-2 rounded-md bg-[#2F80ED] text-white font-semibold'>Select</button>
        </div>
  )
}

export default CourseItem