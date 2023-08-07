import React ,{useState,useEffect} from 'react'
import Search from '../components/searchInput'
import AddButton from '../components/AddButton'
import TaskType from '../components/TaskType'
// import TodoModalContent from '../components/TodoModalContent'
const Content = () => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log('search from contennt ', search);
  },[search])
  return (
    <div className="w-full  p-[40px] min-h-full ">
      <div className="flex  gap-6">
        <Search setSearch={setSearch} search={search} />
        <AddButton />
      </div>
      <div className="flex pt-10 gap-7">
        <TaskType search={search} />
      </div>
    </div>
  );
}
export default Content
