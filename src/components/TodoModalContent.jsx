import React, { useState} from 'react'
// import DynamicInput from './DynamicInput'
import { Input } from "antd";
import DropDown from './DropDown';
// import { UserOutlined } from "@ant-design/icons";

const TodoModalContent = () => {
const { TextArea } = Input;
  const [inputValue, setInputValue] = useState('');
  const [textArea, setTextArea] = useState('');
    const handleChange = (event) => {
      //  event.preventDefault()
      setInputValue(event.target.value);
      setTextArea(event.target.value)
   };
  return (
    <div>
      {/* <DynamicInput /> */}
      <Input
        size="large"
        id="todo"
        onChange={handleChange}
        value={inputValue}
        name="Add"
        placeholder="Write Todo"
        // prefix={<UserOutlined />}
      />
      <p>{inputValue}</p>
      <div className="p-2">
        <TextArea
          rows={4}
          id='textArea'
          onChange={handleChange}
          value={textArea}
          placeholder="Write Description there..."
          maxLength={6}
        />
      </div>
      <p>{textArea}</p>
      <DropDown />
    </div>
  );
}

export default TodoModalContent
