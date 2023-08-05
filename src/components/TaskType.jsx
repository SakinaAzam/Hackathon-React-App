import React, { useState , useEffect} from 'react'
import data from "../data/db.json"
const TaskType = ({ title }) => {


  return (
    <div className="flex gap-7 w-full min-h-[65vh] rounded-[40px] p-5 bg-[#faf4f4d4]">
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <div>
                <p
              className={` ${
                item.priority === "Critical" && "text-[#d92e45e6]"
              } || ${item.priority === "Normal" && "text-[#e8f414f9]"} || ${
                item.priority === "Urgent" && "text-[#4d8359f7]"
              }`}
            >
              {item.priority + "-Task"}
            </p>
            <div
              className={`w-[17vw] p-3  min-h-[30vh] rounded-lg ${
                item.priority === "Critical" && "bg-[#e05063af]"
              } || ${item.priority === "Normal" && "bg-[#ebf35695]"} || ${
                item.priority === "Urgent" && "bg-[#27f05244]"
              }`}
            >
              <p className="text-[18px] font-medium">{item.title}</p>
              <p className="text-[15px]">{item.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TaskType
