import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "@/components/ui/Icon";

const Dropdown = ({
  label = "Dropdown",
  wrapperClass = "w-full",
  labelClass = "label-class-custom flex items-center justify-between",
  children,
  classMenuItems = "mt-2 w-[220px]",
  items = [
    {
      label: "Action",
      link: "#",
    },
    {
      label: "Another action",
      link: "#",
    },
    {
      label: "Something else here",
      link: "#",
    },
  ],
  classItem = "px-4 py-1",
  className = "",
  showTopLabel = false,
  onChange,
  value
}) => {

  const handleSelect = (item) => {
    if (onChange) {
      onChange(item); // Call onChange with selected item
    }
  };

  return (
    <div className={`relative ${wrapperClass}`}>
      <Menu as="div" className={`block w-full ${className}`}>
        <Menu.Button className="block w-full">
          <div className={`flex items-center justify-center ${labelClass}`}>
          <span>{value?.label || label}</span>
            <Icon icon="heroicons-solid:chevron-down" className="w-4 h-4 ltr:ml-2 rtl:mr-2" />
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`w-full absolute ltr:right-0 rtl:left-0 origin-top-right  border border-slate-100
            rounded bg-white dark:bg-slate-800 dark:border-slate-700 shadow-dropdown z-[9999]
            ${classMenuItems}
            `}
          >
            <div>
              {children
                ? children
                : items?.map((item, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <div
                          onClick={() => handleSelect(item)}
                          className={`${
                            active
                              ? "bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50"
                              : "text-slate-600 dark:text-slate-300"
                          } block     ${
                            item.hasDivider
                              ? "border-t border-slate-100 dark:border-slate-700"
                              : ""
                          }`}
                        >
                          {item.link ? (
                            <NavLink
                              to={item.link}
                              className={`block ${classItem}`}
                            >
                              {item.icon ? (
                                <div className="flex items-center">
                                  <span className="block text-xl ltr:mr-3 rtl:ml-3">
                                    <Icon icon={item.icon} />
                                  </span>
                                  <span className="block text-sm">
                                    {item.label}
                                  </span>
                                </div>
                              ) : (
                                <span className="block text-sm">
                                  {item.label}
                                </span>
                              )}
                            </NavLink>
                          ) : (
                            <div
                              className={`block cursor-pointer ${classItem}`}
                            >
                              {item.icon ? (
                                <div className="flex items-center">
                                  <span className="block text-xl ltr:mr-3 rtl:ml-3">
                                    <Icon icon={item.icon} />
                                  </span>
                                  <span className="block text-sm">
                                    {item.label}
                                  </span>
                                </div>
                              ) : (
                                <>
                                  <span className={`block text-sm p-1`}>
                                    {item.label} 
                                  </span>
                                  <span></span>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </Menu.Item>
                  ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
