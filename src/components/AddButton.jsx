
import React, { useState } from "react";
import { Button, Modal } from "antd";
import TodoModalContent from "./TodoModalContent"
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


  return (
    <div>
      <Button
        className="bg-[#213e87ee] text-white  rounded-[50px] "
        onClick={showModal}
      >
        ADD TODO
      </Button>
      <Modal
        title="Add Todo"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="text-black= "
      >
        <TodoModalContent />
      </Modal>
    </div>
  );
}

export default AddButton
