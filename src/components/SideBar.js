import React from "react";
import { USER_LOGO } from "../utilise/constants";
import ToggleButton from "./ToggleButton";
const SideBar = () => {
  return (
    <div className="px-6 border border-gray-400 w-[40%] rounded-2xl shadow-2xl">
      <div className="mt-10 flex shadow-lg rounded-md">
        <img className="h-10 w-10" alt="user_img" src={USER_LOGO} />
        <h2 className="font-bold">Hi, Reader</h2>
        <p className="font-semibold">Here's your News</p>
      </div>
      <div>
        <ToggleButton />
      </div>
      <div className="my-10 shadow-lg rounded-lg">
        <h1 className="font-bold text-center">Have a Feedback?</h1>
        <div className="mt-2 bg-">
          <button className="border border-gray-200 rounded-md bg-gray-300 p-2 m-2">
            We're Listening
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
