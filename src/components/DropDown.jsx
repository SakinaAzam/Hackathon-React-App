import React from 'react'
// import { UserOutlined } from "@ant-design/icons";
import { Dropdown } from 'antd';
import { message } from 'antd';

function DropDown() {

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
      <Dropdown.Button menu={menuProps} className='p-2' onClick={handleButtonClick}>
        Dropdown
      </Dropdown.Button>
    </div>
  );
}

export default DropDown
