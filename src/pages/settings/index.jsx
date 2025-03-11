import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { useDispatch } from "react-redux";
import { setBreadcrumbs, setPageTitle } from "@/store/common/commonSlice";
import Button from "@/components/ui/Button";
import ProfileDetails from "./ProfileDetails";
import ProfileDetailsAddress from "./PasswordInformation";
import ChangePassword from "./PasswordInformation";
import LogedinDevices from "./LogedinDevices";
import ProfileDetailsCard from "@/components/ui/ProfileDetailsCard";
import PageMenuBlock from "@/components/ui/PageMenuBlock";

const Settings = () => {
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState("personal_information");

  useEffect(() => {
    const breadCrumb = [
      {
        label: "Settings",
        path: "#",
      },
    ]
    dispatch(setBreadcrumbs(breadCrumb));
    dispatch(setPageTitle("Settings"));
  }, [dispatch]);

  const menuList = [
    { title: "Personal Information", id: "personal_information" },
    { title: "security & privacy", id: "security_privacy" },
    { title: "logged in devices", id: "logged_in_devices" },
  ];

  const profileData = {
    name: "John Doe",
    role: "Software Engineer",
    address: "123 Main Street, Anytown, USA",
    image: "https://shorturl.at/FCngH", 
  }

  const onclickChangeMenu = (id) => {
    setActiveMenu(id);
  };

  return (
    <>
      <div className="space-y-5 profile-page">
        {/* Profile Card */}
        <ProfileDetailsCard profileData={profileData} profileType="basic" />

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-3 col-span-12">
            <PageMenuBlock menuList={menuList} onclickChangeMenu={(id) => onclickChangeMenu(id)} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 col-span-12">
            {activeMenu === "personal_information" && <ProfileDetails />}
            {activeMenu === "security_privacy" && <ChangePassword />}
            {activeMenu === "logged_in_devices" && <LogedinDevices />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
