import React from 'react'

const Filter = (props) => {
    const filterData = props.filterData;
    const category = props.category;
    const setCategory = props.setCategory;

    const filterHandler = (title) => {
        setCategory(title)
    }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
        {filterData.map((data) => {
            return(
                <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category === data.title ? "bg-opacity-60 border-white" : "bg-oapcity-40 border-transparent"}`} key={data.id} onClick={() => filterHandler(data.title)}>
                    {data.title}
                </button>
            )
        })}

        {/* <button className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-transparent transition-all duration-300">Liked Courses</button> */}
    </div>
  )
}

export default Filter