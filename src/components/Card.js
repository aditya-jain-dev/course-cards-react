import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';

const Card = (props) => {
    const course = props.course;
    const likedCourses = props.likedCourses;
    const setLikedCourses = props.setLikedCourses;

    const [readmore, setReadmore] = useState(false);

    const description = readmore ? (course.description) : (course.description.substr(0,100) + "...");

    const readmoreHandler = () => {
        setReadmore(!readmore);
    }

    const clickHandler = () => {
        // pehle se like hai ya nahi -> agar nahi hai to bhej dege
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning('Like Removed');
        }
        else{
            // pehle se like nahi hai
            // insert karna hai ye course like course me
            if (likedCourses.length === 0) {
                setLikedCourses([course.id])
            }
            else{
                // non-empty
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success('Liked Successfully')
        }
    };

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>

        <div className='relative'>
            <img src={course.image.url} alt={course.image.alt} />

            <div className='absolute w-[40px] h-[40px] bg-white rounded-full right-2 -bottom-[1.25rem] flex items-center justify-center'>
                <button onClick={clickHandler}>
                    {likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)}
                </button>
            </div>
        </div>

        <div className='text-white p-4'>
            <p className='font-semibold leading-6 text-lg'>{course.title}</p>
            <p className='mt-2' onClick={readmoreHandler}>{description}</p>
        </div>

    </div>
  )
}

export default Card