import React from "react";

const HotelInput = ({ text, type, name, as, children, value, onChange, errorMessage }) => {
  return (
    <>
      <div className="inputBox relative w-full md:w-48 rounded-md">
        <input
          className="w-full p-3 border border-solid border-borderColor hover:border-white rounded-md bg-headerbg outline-none text-white duration-500 focus:border-white valid:border-white"
          type={type}
          name={name}
          as={as}
          value={value}
          onChange={onChange}
        />
        {children}
        <span className="absolute left-0 p-3 pointer-events-none text-borderColor uppercase duration-500">
          {text}
        </span>
        {errorMessage?.[name] && (
          <div className="error absolute left-0 p-3 pointer-events-none duration-500">
            {errorMessage[name]}
          </div>
        )}
      </div>
    </>
  );
};

export default HotelInput;
