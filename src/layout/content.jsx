import React from 'react'
import Search from '../components/searchInput'
import AddButton from '../components/AddButton'
import TaskType from '../components/TaskType'
const  content =() =>{
  return (
    <div className="w-full  p-[40px] min-h-full ">
      <div className="flex  gap-6">
        <Search />
        <AddButton />
      </div>
      <div className="flex pt-10 gap-7">
        
        <TaskType  />
      </div>
    </div>
  );
}

export default content
