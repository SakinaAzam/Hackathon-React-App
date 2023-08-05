import React from 'react'
// import { AudioOutlined } from "@ant-design/icons";

import { Input, Space } from "antd";

const { Search } = Input;


const onSearch = (value: string) => console.log(value);
function searchInput() {
  return (
    <div>
      <Search
        placeholder="Search Todo"
        onSearch={onSearch}
        style={{ marginTop: "5px" , width: 200 }}
      />
    </div>
  );
}

export default searchInput
