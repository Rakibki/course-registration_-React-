import React, { useEffect, useState } from 'react'
import Navber from './components/navber/Navber'
import CourseContainer from './components/Course-container/CourseContainer'
import SelectedCourse from './components/selectedCourse/SelectedCourse'

const App = () => {

  const [course, setCourse] = useState([])
  const [selectedCourseItems, setSelectedCourseItem] = useState([])

  useEffect(() => {
    fetch('data.json')
    .then((res) => res.json())
    .then((data) => setCourse(data))
  },[])

  const handleSelect = (item) => {
    setSelectedCourseItem([...selectedCourseItems, item])
  }

  return (
    <div>
      <Navber />
      <div className='md:flex gap-2 lg:flex px-8 md:px-6 lg:px-14'>
          <CourseContainer handleSelect={handleSelect} course={course} />
          <SelectedCourse selectedCourseItems={selectedCourseItems} />
      </div>
    </div>
  )
}

export default App