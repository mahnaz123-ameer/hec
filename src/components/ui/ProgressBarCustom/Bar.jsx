import React, { useState, useRef, useEffect } from "react";

const Bar = ({ value, className, showValue, striped, animate }) => {
  // striped style

  return (
    <>
      <div
        className={`flex flex-col text-center whitespace-nowrap justify-center h-full progress-bar  ${className} ${
          striped ? "stripes" : ""
        }
        ${animate ? "animate-stripes" : ""}
        `}
        style={{ width: `${value}%` }}
      >
      </div>
    </>
  );
};

export default Bar;
