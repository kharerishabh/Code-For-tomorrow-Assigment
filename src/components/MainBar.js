import React from "react";
import useCardData from "../hooks/useCardData";
import { useSelector } from "react-redux";
import DataCard from "./DataCard";
const MainBar = () => {
  useCardData();
  const cardData = useSelector((store) => store.cardData.cardData);
  console.log(cardData);
  if (!cardData) return;
  return (
    <div className="flex flex-col m-2 p-2">
      {cardData?.map((data) => (
        <DataCard
          key={data.id}
          title={data.title}
          body={data.body}
          id={data.id}
        />
      ))}
    </div>
  );
};

export default MainBar;
