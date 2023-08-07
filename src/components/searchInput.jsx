import React ,{useState} from 'react'
// import { AudioOutlined } from "@ant-design/icons";

import { Input, Space } from "antd";

const { Search } = Input;




function searchInput({ setSearch,search }) {
  function onSearch(value) {
    console.log('>>>>',value);
    setSearch(value);
  };
  return (
    <div>
      <Search
        placeholder="Search Todo"
        onSearch={(value) => { onSearch(value) }}
        style={{ marginTop: "5px" , width: 200 }}
      />
    </div>
  );
}

export default searchInput
