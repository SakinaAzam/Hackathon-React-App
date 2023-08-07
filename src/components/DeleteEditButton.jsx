import React from 'react'
import MenuOutlined from "@ant-design/icons"
function DeleteEditButton({toggleModal}) {
  return (
    <div>
      <button onClick={toggleModal}>
        <MenuOutlined style={{ color: "black" , fontSize: "15px" }} />
      </button>
    </div>
  );
}

export default DeleteEditButton
