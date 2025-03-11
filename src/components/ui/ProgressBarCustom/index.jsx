import React from "react";
import Bar from "./Bar";
const ProgressBarCustom = ({
  title,
  children,
  value,
  backClass = "rounded-[999px]",
  className = "bg-green-700 dark:bg-green-700",
  titleClass = "text-base font-normal",
  striped,
  animate,
  showValue,
}) => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {title && (
        <span
          className={`block text-black-900 tracking-[0.01em] ${titleClass} col-span-3`}
        >
          {title}
        </span>
      )}
      {
        // if no children, then show the progress bar
        !children && (
          <div
            className={`w-full md:max-w-[125px] overflow-hidden bg-opacity-10 progress col-span-4 ${backClass}`}
          >
            <Bar
              value={value}
              className={className}
              striped={striped}
              animate={animate}
              showValue={showValue}
            />
          </div>
        )
      }
      {
        // if children, then show the progress bar with children
        children && (
          <div
            className={`w-full  overflow-hidden bg-opacity-10 flex progress col-span-6  ${backClass}`}
          >
            {children}
          </div>
        )
      }
      {showValue && (
          <span className="text-sm text-black-900 font-bold">{value + "%"}</span>
      )}
    </div>
  );
};

export default ProgressBarCustom;
