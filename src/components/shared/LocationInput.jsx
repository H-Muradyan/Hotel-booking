import React from "react";
import ReactGoogleAutocomplete from "react-google-autocomplete";

const LocationInput = ({ text, name, apiKey, onPlaceSelected, defaultValue = "" }) => {
  return (
    <>
      <div className="inputBox relative w-full md:w-48 rounded-md">
        <ReactGoogleAutocomplete
          className="loc w-full p-3 border border-solid border-borderColor hover:border-white rounded-md bg-headerbg outline-none text-white duration-500 focus:border-white valid:border-white"
          apiKey={apiKey}
          onPlaceSelected={onPlaceSelected}
          name={name}
          
          defaultValue={defaultValue}
        />
        <span className="absolute left-0 p-3 pointer-events-none text-borderColor uppercase duration-500">
          {text}
        </span>

      </div>
    </>
  );
};

export default LocationInput;
