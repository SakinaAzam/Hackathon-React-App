import React from 'react'
function header() {
  return (
    <div>
      <div className="flex  justify-between p-2  text-white  bg-blue-900">
        <div> My TodoList App </div>
        <div className="text-white underline-offset-1  font-sans font-[5px]">Customize App</div>
      </div>
    </div>
  );
}

export default header
