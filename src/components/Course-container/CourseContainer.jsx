import React from 'react'
import CourseItem from '../Course-item/CourseItem'

const CourseContainer = ({course, handleSelect}) => {
  return (
    <div className='lg:w-3/4 md:w-3/4 grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
        {
            course.map((course) => <CourseItem handleSelect={handleSelect} key={course.id} course={course} />)
        }
    </div>
  )
}

export default CourseContainer