import { useEffect } from "react";
import { CARD_DATA } from "../utilise/constants";
import { useDispatch } from "react-redux";
import { addData } from "../redux-store/dataSlice";
const useCardData = () => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const data = await fetch(CARD_DATA);
      const json = await data.json();
      console.log(json);
      dispatch(addData(json));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return;
};

export default useCardData;
