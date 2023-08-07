import {  Modal } from "antd";
import React, { useState} from "react";
import { CloseCircleOutlined } from "@ant-design/icons"
import { EditTwoTone } from "@ant-design/icons";
import { DeleteTwoTone } from "@ant-design/icons"
// import TodoModalContent from './TodoModalContent';
import EditModal from "./EditModal";
function TodoItemModal({
  isOpen,
  buttonCoordinates,
  closeModal,
  sortedTodos,
  onDelete,
}) {
  const modalStyle = {
    position: "absolute",
    top: `${buttonCoordinates.y}px`,
    left: `${buttonCoordinates.x - 100}px`, // Adjust 300 to your desired modal width
    display: isOpen ? "block" : "none",
    backgroundColor: "white",
    width: "100px",
    height: "70px",
    borderRadius: "3px",
    padding: "5px",
  };
const [isModalOpen, setIsModalOpen] = useState(false);

const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
};
const handleCancel = () => {
  setIsModalOpen(false);
};
  return (
    <div style={modalStyle}>
      <div className="flex gap-1 ">
        <div className="">
          <button
            onClick={() => onDelete(sortedTodos.id)}
            className=" flex gap-1 w-[70px] h-[30px]  "
          >
            {" "}
            <DeleteTwoTone style={{ color: "black", fontSize: "20px" }} />
            <p className="text-sm">Delete</p>
          </button>
          <button onClick={showModal} className="flex gap-1 w-[70px] h-[30px] ">
            {" "}
            <EditTwoTone style={{ color: "black", fontSize: "20px" }} />
            <p className="text-sm">Edit</p>
          </button>
          <Modal
            title="Add Todo"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <EditModal />
            {/* <TaskType  dataFromParent={}  /> */}
          </Modal>
        </div>
        <CloseCircleOutlined
          onClick={closeModal}
          style={{ color: "black", fontSize: "17px" }}
        />
      </div>
    </div>
  );
}

export default TodoItemModal
