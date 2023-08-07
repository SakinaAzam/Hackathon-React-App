import React, { useState, useEffect } from "react";
// import DynamicInput from './DynamicInput'
import { Input } from "antd";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Select } from "antd";
import EditModal from "./EditModal";
import TaskType from "./TaskType";
// import { UserOutlined } from "@ant-design/icons";
const TodoModalContent = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingTodo, setEditingTodo] = useState(null);

    const handleEditClick = (todo) => {
      setEditingTodo(todo);
      setShowEditModal(true);
    };

    const handleEditCancel = () => {
      setEditingTodo(null);
      setShowEditModal(false);
    };

    const handleEditSave = () => {
      setShowEditModal(false);
      // fetchTodos(); // Refresh todos after update
    };
/////////////////////////////////
  const { TextArea } = Input;
  const [todoInput, setTodoInput] = useState("");
  const [textArea, setTextArea] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showTaskType, setShowTaskType] = useState(false);
  
  const handleChange = (value) => {
    setSelectedOption(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
     setShowTaskType(false);
    const newId = uuidv4();
    const newData = {
      id: newId,
      title: todoInput,
      description: textArea,
      priority: selectedOption,
    };

    try {
      await axios.post(" http://localhost:5000/todos", newData);
      setTodoInput("");
      setTextArea("");
      setSelectedOption("");
    } catch (error) {
      console.error("Error posting data:", error);
    }
    
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Input
          size="large"
          id="todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          name="Add"
          placeholder="Write Todo"
          // prefix={<UserOutlined />}
        />
        <div className="pt-3">
          <TextArea
            rows={4}
            id="textArea"
            onChange={(e) => {
              setTextArea(e.target.value);
            }}
            value={textArea}
            placeholder="Write Description there..."
            maxLength={6}
          />
        </div>
        <Select
          defaultValue="Select Priority"
          style={{ width: 150 }}
          onChange={handleChange}
          className="mt-4"
          options={[
            { value: "Critical", label: "Critical" },
            { value: "Normal", label: "Normal" },
            { value: "Urgent", label: "Urgent" },
          ]}
        />
        <br />
        <button
          type="submit"
          className="w-[90px] h-10 rounded-md text-white bg-blue-950  mt-4"
        >
          Add
        </button>
        {showTaskType && (
          <TaskType
            dataFromParent={handleFormSubmit}
            onEditClick={handleEditClick}
          />
        )}
        
        {showEditModal && editingTodo && (
          <EditModal
            todo={editingTodo}
            onCancel={handleEditCancel}
            onSave={handleEditSave}
          />)}
      </form>
    </div>
  );
};

export default TodoModalContent;
