import React from 'react'
function header() {
  return (
    <div>
      <div className="flex  justify-between p-3  text-white  bg-blue-900">
        <div> My TodoList App </div>
        <div className="text-white underline font-sans font-[5px]">Customize App</div>
      </div>
    </div>
  );
}

export default header
