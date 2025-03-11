import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { menuItems } from "@/constant/data";
import Icon from "@/components/ui/Icon";
import { useSelector } from "react-redux";

const Breadcrumbs = () => {
  const location = useLocation();
  const locationName = location.pathname.replace("/", "");
  const { breadcrumbsList } = useSelector((state) => state.commonSlice);

  const [isHide, setIsHide] = useState(null);
  const [groupTitle, setGroupTitle] = useState("");

  useEffect(() => {
    const currentMenuItem = menuItems.find(
      (item) => item.link === locationName
    );

    const currentChild = menuItems.find((item) =>
      item.child?.find((child) => child.childlink === locationName)
    );

    if (currentMenuItem) {
      setIsHide(currentMenuItem.isHide);
    } else if (currentChild) {
      setIsHide(currentChild?.isHide || false);
      setGroupTitle(currentChild?.title);
    }
  }, [location, locationName]);

  return (
    <>
      {!isHide ? (
        <div className="flex space-x-3 rtl:space-x-reverse">
          <ul className="breadcrumbs">
            <li className="text-black-700 pr-0">
              <NavLink to="/dashboard" className="text-lg">
                <Icon icon="heroicons-outline:home" />
              </NavLink>
              <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
                <Icon icon="heroicons-outline:slash" />
              </span>
            </li>
            <li className="text-black-700 ml-0">
              /
            </li>
            {groupTitle && (
              <li className="text-black-700">
                <button type="button" className="capitalize">
                  {groupTitle}
                </button>
                <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
                  <Icon icon="heroicons-outline:slash" />
                </span>
              </li>
            )}
            {breadcrumbsList?.length > 0 && breadcrumbsList.map((item, i) => {
              return (
                <li key={i} className="capitalize text-black-700 dark:text-slate-400">
                <NavLink to={item?.path} className="text-lg">
                  {item?.label}
                </NavLink>
                <span className="breadcrumbs-icon rtl:transform rtl:rotate-180">
                  <Icon icon="heroicons-outline:slash" />
                </span>
              </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Breadcrumbs;
