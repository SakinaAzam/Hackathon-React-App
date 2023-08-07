import React, { useState, useEffect } from "react";
import axios from "axios";
import { MenuOutlined } from "@ant-design/icons";
import TodoItemModal from "./TodoItemModal";

const TaskType = ({ dataFromParent , search}) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    if (search != "") {
      const data = sortedTodos.filter((item) => {
        return item.title.includes(search) || item.description.includes(search);
      });
      setFilter(data);
    }
    console.log("search", search)
  }, [search]);


  
  useEffect(() => {
    fetchTodos();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonCoordinates, setButtonCoordinates] = useState({ x: 0, y: 0 });
  const [currentItemId, setCurrentItemId] = useState(null);
  const openModal = (event, id) => {
    setButtonCoordinates({
      x: event.target.offsetLeft,
      y: event.target.offsetTop,
    });
    setCurrentItemId(id);
    setIsModalOpen(true);
    console.log("sdjfuf");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:5000/todos");
    setTodos(response.data);
  };
  console.log("Hey", todos.title);
  const combinedTodos = [...todos];
  if (
    dataFromParent &&
    dataFromParent.id &&
    dataFromParent.priority &&
    dataFromParent.title &&
    dataFromParent.description
  ) {
    combinedTodos.push(dataFromParent);
  }
  const data = search !='' ? filter : combinedTodos;
  const sortedTodos = data.sort((a, b) => {
    const priorityOrder = ["Critical", "Urgent", "Normal"];
    return (
      priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
    );
  });

  console.log("------->", sortedTodos);
  const deleteTodo = async () => {
    if (currentItemId) {
      await axios.delete(`http://localhost:5000/todos/${currentItemId}`);
      fetchTodos();
      closeModal(); // Close the modal after deleting
    }
    console.log("djdfifd");
  };
  return (
    // <div>n</div>
    <div className="flex justify-start flex-wrap gap-7 w-full min-h-[65vh] rounded-[40px] p-5 bg-[#faf4f4d4]">
      {sortedTodos.map((item) => (
        <div>
          <p
            className={` flex justify-center ${
              item.priority === "Critical" && "text-[#d92e45e6]"
            } || ${item.priority === "Normal" && "text-[#e8f414f9]"} || ${
              item.priority === "Urgent" && "text-[#4d8359f7]"
            }`}
          >
            {item.priority}
          </p>
          <div
            className={`w-[20vw] p-3  min-h-[30vh] rounded-lg ${
              item.priority === "Critical" && "bg-[#e05063af]"
            } || ${item.priority === "Normal" && "bg-[#ebf35695]"} || ${
              item.priority === "Urgent" && "bg-[#27f05244]"
            }`}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-[18px] font-medium">{item.title}</p>
                <p className="text-[15px]">{item.description}</p>
              </div>
              <button onClick={(event) => openModal(event, item.id)}>
                <MenuOutlined
                  style={{ fontSize: "15px", marginBottom: "120px" }}
                />
              </button>
              <TodoItemModal
                isOpen={isModalOpen}
                buttonCoordinates={buttonCoordinates}
                closeModal={closeModal}
                key={item.id}
                sortedTodos={sortedTodos}
                onDelete={deleteTodo}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskType;
