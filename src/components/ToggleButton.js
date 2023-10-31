import React from "react";

const ToggleButton = () => {
  return (
    <div className="shadow-xl mt-10">
      <h1 className="font-bold text-center">View Toggle</h1>
      <div className="shadow-lg border border-3 rounded-lg">
        <button className="m-2 p-2 bg-gray-400">Change Theme</button>
      </div>
    </div>
  );
};

export default ToggleButton;
