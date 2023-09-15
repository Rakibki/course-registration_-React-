import React, { useEffect, useState } from 'react'
import Navber from './components/navber/Navber'
import CourseContainer from './components/Course-container/CourseContainer'
import SelectedCourse from './components/selectedCourse/SelectedCourse'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [course, setCourse] = useState([])
  const [selectedCourseItems, setSelectedCourseItem] = useState([])
  const [totolCredit, setTotalCredit] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [creditRemaining, setCreditRemaining] = useState(20)

  useEffect(() => {
    fetch('data.json')
    .then((res) => res.json())
    .then((data) => setCourse(data))
  },[])


  const handleSelect = (item) => {
    const exist = selectedCourseItems.find((course) => course.id === item.id);
    if(exist) {
        return toast.warn("you have already selected this course")
    } else {
      if(totolCredit <= 20) {
        setCreditRemaining(creditRemaining-item.Credit)
        if(creditRemaining < item.Credit) {
          return toast.warn("your dont have enough credit hour")
        }

        let creditTemp = item.Credit;
        selectedCourseItems.forEach((item) => creditTemp = creditTemp + item.Credit);
        setTotalCredit(creditTemp)

        let priceTemp = item.price;
        selectedCourseItems.forEach((item) => priceTemp = priceTemp + item.price)
        setTotalPrice(priceTemp)

        setSelectedCourseItem([...selectedCourseItems, item])

      }
    }
  }


  return (
    <div>
      <Navber />
      <div className='md:flex gap-2 lg:flex px-8 md:px-6 lg:px-14'>
          <CourseContainer handleSelect={handleSelect} course={course} />
          <SelectedCourse creditRemaining={creditRemaining} totalPrice={totalPrice} totolCredit={totolCredit} selectedCourseItems={selectedCourseItems} />
      </div>
      <div>
        <ToastContainer position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
      </div>
    </div>
  )
}

export default App