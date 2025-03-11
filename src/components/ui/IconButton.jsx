import React from "react";
import Icon from "@/components/ui/Icon";
import { Link } from "react-router-dom";
function IconButton({
  text,
  type = "button",
  isLoading,
  disabled,
  className = "bg-primary-500 text-white",
  children,
  icon,
  loadingClass = "unset-classname",
  iconPosition = "left",
  iconClass = "text-[20px]",
  link,
  onClick,
  div,
}) {
  
  return (
    <>
      <button
          type={type}
          onClick={onClick}
          className={`inline-flex justify-center items-center h-[32px] w-[32px] 
            ${disabled ? " opacity-40 cursor-not-allowed" : ""}
            ${className}`}
        >
          {/* if has children and not loading*/}
            <>
              {icon && (
                <span
                  className={`${iconClass}`}
                >
                  <Icon icon={icon} />
                </span>
              )}
              <span>{children}</span>
            </>
        </button>
    </>
  );
}

export default IconButton;
