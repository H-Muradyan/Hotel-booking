import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

const RangeInput = ({ text, format, onChange, defaultValue = "", errorMessage }) => {
  return (
    <>
      <div className="inputBox relative w-full md:w-56">
        <RangePicker
          className="date w-full p-3 border border-solid border-borderColor hover:border-white rounded-md bg-headerbg outline-none text-white duration-500 focus:border-white valid:border-white"
          onChange={onChange}
          defaultValue={defaultValue}
          format={format}
        />
        <span className="absolute left-0 p-3 pointer-events-none text-borderColor uppercase duration-500">
          {text}
        </span>
        {errorMessage?.from && (
          <div className="error absolute left-0 p-3 pointer-events-none duration-500">
            {errorMessage.from}
          </div>
        )}
      </div>
    </>
  );
};

export default RangeInput;
