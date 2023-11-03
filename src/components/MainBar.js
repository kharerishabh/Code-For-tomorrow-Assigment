import React, { useState } from "react";
import useCardData from "../hooks/useCardData";
import { useSelector } from "react-redux";
import DataCard from "./DataCard";
const MainBar = () => {
  const [page, setPage] = useState(1);
  useCardData();
  const cardData = useSelector((store) => store.cardData.cardData);
  // console.log(cardData);
  if (!cardData) return;
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= cardData.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };
  return (
    <div className="flex flex-col m-2 p-2">
      {cardData.slice(page * 6 - 6, page * 6).map((data) => (
        <DataCard
          key={data.id}
          title={data.title}
          body={data.body}
          id={data.id}
        />
      ))}
      {cardData.length > 0 && (
        <div className="flex justify-center">
          {page > 1 ? <span
            className="p-2 border border-gray-100 cursor-pointer"
            onClick={() => selectPageHandler(page - 1)}
          >
            ◀
          </span>: ""}
          {[...Array(cardData.length / 10)].map((_, i) => {
            return (
              <span
                onClick={() => selectPageHandler(i + 1)}
                className="p-2 border border-gray-100 cursor-pointer"
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          {page < 10 ? <span
            className="p-2 border border-gray-100 cursor-pointer"
            onClick={() => selectPageHandler(page + 1)}
          >
            ▶
          </span>: ""}
        </div>
      )}
    </div>
  );
};

export default MainBar;
