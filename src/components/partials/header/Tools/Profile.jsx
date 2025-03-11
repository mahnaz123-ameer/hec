import React from "react";
import Dropdown from "@/components/ui/react-hook-form/Dropdown";
import Icon from "@/components/ui/Icon";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/store/api/auth/authSlice";

import UserAvatar from "@/assets/images/all-img/user.png";
import { settingsUrl } from "@/constant/data";

const profileLabel = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1 ltr:mr-[5px] rtl:ml-[5px] relative">
        <div className="lg:h-8 lg:w-8 h-7 w-7 rounded-full">
          <img
            src={UserAvatar}
            alt=""
            className="block w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block hidden">
          Albert Flores
        </span>
        <span className="text-base inline-block ltr:ml-[5px] rtl:mr-[5px]">
          <Icon icon="heroicons-outline:chevron-down"></Icon>
        </span>
      </div>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem("user");
    dispatch(logOut());
  };

  const ProfileMenu = [
    {
      label: "Profile",
      icon: "heroicons-outline:user",

      action: () => {
        navigate(settingsUrl);
      },
    },
    {
      label: "Logout",
      icon: "heroicons-outline:login",
      action: () => {
        dispatch(handleLogout);
      },
    },
  ];

  return (
    <Dropdown label={profileLabel()} classMenuItems="w-[180px] md:w-[360px] top-[30px] md:top-[58px]">
      <>
        <div className="flex ltr:mr-[5px] rtl:ml-[5px] gap-3 p-4 items-center border-b border-dashed">
          <div className="lg:h-8 lg:w-8 h-7 w-7 relative rounded-full">
            <img
              src={UserAvatar}
              alt=""
              className="block w-full h-full object-cover rounded-full"
            />
            <span class="absolute lg:right-0 lg:top-0 h-2 w-2 bg-green-500 text-[8px] font-semibold flex flex-col items-center justify-center rounded-full text-white z-[99]" style={{top: "-5px", right: "-5px"}}></span>
          </div>
          <span className="text-lg text-slate-600 dark:text-slate-300">Admin Full Name</span>
        </div>
      </>
      <div className="">
        {ProfileMenu.map((item, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <div
                onClick={() => item.action()}
                className={`py-2  ${
                  active
                    ? "bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50"
                    : "text-slate-600 dark:text-slate-300"
                } block     ${
                  index !== ProfileMenu.length - 1
                    ? "border-b border-dashed"
                    : ""
                }`}
              >
                <div className={`block cursor-pointer px-4 py-2`}>
                  <div className="flex items-center">
                    <span className="block text-xl ltr:mr-3 rtl:ml-3">
                      <Icon icon={item.icon} />
                    </span>
                    <span className="block text-sm">{item.label}</span>
                  </div>
                </div>
              </div>
            )}
          </Menu.Item>
        ))}
      </div>
    </Dropdown>
  );
};

export default Profile;
