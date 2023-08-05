import React from 'react'
import { Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
const  DynamicInput = (height)  =>{
  return (
    <div className='p-2'>
    <Input size="large" placeholder="Write Todo" prefix={<UserOutlined />}/>
    </div>
  );
}

export default DynamicInput
