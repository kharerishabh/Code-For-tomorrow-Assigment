import React from "react";
import { useDispatch } from "react-redux";
import { USER_LOGO } from "../utilise/constants";
import { deleteData } from "../redux-store/dataSlice";
const DataCard = ({ title, body, id }) => {
  const disptach = useDispatch();
  const deleteHandler = () => {
    disptach(deleteData(id));
  };
  return (
    <div className="shadow-2xl mx-2 my-2 rounded-xl">
      <div className="border border-gray-500 rounded-lg">
        <img className="h-10 w-10 m-2 p-2" alt="user_img" src={USER_LOGO} />
        <h2 className="font-bold m-2 p-2">{title}</h2>
        <p className="font-semibold m-3">{body}</p>
      </div>
      <div>
        <button
          className="bg-red-900 rounded-lg font-bold"
          onClick={deleteHandler}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default DataCard;
