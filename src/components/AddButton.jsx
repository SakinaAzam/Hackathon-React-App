
import { Button, Modal } from "antd";
import React, { useState, useEffect } from "react";
// import DynamicInput from './DynamicInput'
import { Dropdown } from "antd";
import { message } from "antd";
import TaskType from "./TaskType";
import { PlusCircleOutlined } from "@ant-design/icons"
import TodoModalContent from "./TodoModalContent";
function AddButton() {
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
     const handleButtonClick = (e) => {
       message.info("Click on left button.");
       console.log("click left button", e);
     };
     const handleMenuClick = (e) => {
       message.info("Click on menu item.");
       console.log("click", e);
     };
     const items = [
       {
         label: "Critical Task",
         key: "1",
         // icon: <UserOutlined />,
       },
       {
         label: "Urgent Task",
         key: "2",
         // icon: <UserOutlined />,
       },
       {
         label: "Normal Task",
         key: "3",
         // icon: <UserOutlined />,
         danger: true,
       },
     ];
     const menuProps = {
       items,
       onClick: handleMenuClick,
     };
   

  return (
    <div>
      <Button
        className="bg-[#213e87ee] text-white    rounded-[50px] "
        onClick={showModal}
      >
        <div className="flex gap-1">
          <PlusCircleOutlined style={{ color: "white", fontSize: "17px" , marginTop: "2px" }} />
          <p> Add Todo</p>
        </div>
      </Button>

      <Modal
        title="Add Todo"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <TodoModalContent />
        {/* <TaskType  dataFromParent={}  /> */}
      </Modal>
      {/* <TaskType dataFromParent={addTodo} /> */}
    </div>
  );
}

export default AddButton
