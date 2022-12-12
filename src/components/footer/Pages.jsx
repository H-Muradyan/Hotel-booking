import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Pages({ pages }) {
  return (
    <div className="flex flex-col col-start-1 col-span-3 md:col-start-5 lg:col-start-7">
      <p className="text-white font-semibold text-lg mb-6">Pages</p>
      {pages.map((elem) => (
        <Link className="text-white mt-2 hover:text-[#d0bd6e]" key={elem.id} to={elem.path}>{elem.text}</Link>
      ))}
    </div>
  );
}
