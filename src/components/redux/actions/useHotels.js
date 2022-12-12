import { useDispatch } from "react-redux";
import { allHotels } from "../../../api/datas/allHotels";

const useHotels = () => {
  const dispatch = useDispatch();
  const getAllHotels = async () => {
    try {
      const res = await allHotels();
      if (res.data) {
        dispatch({
          type: "GET_ALL_HOTELS",
          payload: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const diffDays = (from, to) => {
    const day = 24 * 60 * 60 * 1000;
    const start = new Date(from);
    const end = new Date(to);
    const difference = Math.round(Math.abs((start - end) / day));
    return difference;
  };


  
  return {
    getAllHotels,
    diffDays,
  };
};

export default useHotels;
