import React from "react";
import { ErrorMessage, Field } from "formik";


const TextInput = ({ text, type, name, as, children }) => {
  return (
    <>
      <div className="inputBox relative w-full md:w-48 rounded-md">
        <Field
          className="w-full p-3 border border-solid border-borderColor hover:border-white rounded-md bg-headerbg outline-none text-white duration-500 focus:border-white valid:border-white"
          type={type}
          name={name}
          as={as}
        >
          {children}
        </Field>
        <span className="absolute left-0 p-3 pointer-events-none text-borderColor uppercase duration-500">
          {text}
        </span>
        <div className="error absolute left-0 p-3 pointer-events-none duration-500">
          <ErrorMessage name={name} />
        </div>
      </div>
    </>
  );
};

export default TextInput;
