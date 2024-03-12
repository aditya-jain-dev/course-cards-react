import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {

    const courses = props.courses;
    const category = props.category;
    // console.log(courses);

    const [likedCourses, setLikedCourses] = useState([]);

    const allCourses = [];
    
    // // returns you a list of all courses recieved from the api response
    const getCourses = () => {
        if (category === 'All') {
            Object.values(courses).forEach(courseCategory => {
                courseCategory.forEach(course => {
                    allCourses.push(course);
                });
            }); 
        }
        // specific category ka data pass kruga
        else{
            return courses[category]; 
        }
        return allCourses;
    };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map(course => {
                return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            })
        }
    </div>
  )
}

export default Cards