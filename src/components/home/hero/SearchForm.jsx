import React, { useState } from "react";
import RangeInput from "../../shared/RangeInput";
import HotelInput from "../../shared/HotelInput";
import { useNavigate } from "react-router";
import SelectInput from "../../shared/SelectInput";
import LocationInput from "../../shared/LocationInput";
import styles from "../../../styles/SearchForm.module.css"

const SearchForm = ({ locationProps, dateProps, bedProps }) => {
  const arrDate = dateProps ? dateProps.split(",") : "";

  const navigate = useNavigate();

  const [location, setLocation] = useState(locationProps ? locationProps : "");
  const [date, setDate] = useState(arrDate);
  const [bed, setBed] = useState(bedProps ? bedProps : 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-result?location=${location}&date=${date}&bed=${bed}`);
  };

  return (
    <div className="px-4 md:px-0 mt-8 md:absolute md:bottom-16 w-full">
      <form
        onSubmit={handleSubmit}
        className="md:px-0 space-y-8 flex-col md:flex-row items-center flex justify-center md:space-y-0 md:space-x-2 w-full lg:space-x-4"
      >
        <LocationInput
          text="Location"
          name="location"
          value={location}
          apiKey={import.meta.env.VITE_APP_GOOGLE_AUTOCOMPLETE}
          onPlaceSelected={(place) => {
            setLocation(place.formatted_address);
          }}
        />
        <RangeInput text="Date" name="date" onChange={(value, dateString) => setDate(dateString)} />
        <SelectInput text="bed" name="bed" value={bed} onChange={(e) => setBed(e.target.value)} />
        <button className={styles.serchBtn}></button>
      </form>
    </div>
  );
};

export default SearchForm;
