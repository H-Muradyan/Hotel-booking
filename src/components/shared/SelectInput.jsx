import React from "react";

const SelectInput = ({ text, name, value, onChange, errorMessage }) => {
  return (
    <>
      <div className="inputBox relative w-full md:w-20 rounded-md">
        <select
          className="w-full p-3 border border-solid border-borderColor hover:border-white rounded-md bg-headerbg outline-none text-white duration-500 focus:border-white valid:border-white"
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="" defaultValue disabled hidden></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
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

export default SelectInput;
