import { useDispatch } from "react-redux";
import { sellerHotels } from "../../../api/datas/allHotels";

const useSeller = (token) => {
  const dispatch = useDispatch();
  const getSellerHotels = async () => {
    try {
      const res = await sellerHotels(token);
      if (res.data) {
        dispatch({
          type: "GET_SELLER_HOTELS",
          payload: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { getSellerHotels };
};

export default useSeller;
