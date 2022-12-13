import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useHotels from "../../redux/actions/useHotels";
import AllHotels from "./AllHotels";
import HotelsText from "./HotelsText";

const Hotels = () => {
  const data = useSelector((data) => data.data);
  const { getAllHotels } = useHotels();

  useEffect(() => {
    getAllHotels();
  }, []);

  return (
    <div className="mx-3 md:mx-10">
      <HotelsText />
      <AllHotels data={data} />
    </div>
  );
};

export default Hotels;
