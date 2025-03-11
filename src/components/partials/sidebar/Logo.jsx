import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import useDarkMode from "@/hooks/useDarkMode";
import useSidebar from "@/hooks/useSidebar";
import useSemiDark from "@/hooks/useSemiDark";
import useSkin from "@/hooks/useSkin";

// import images
import MobileLogo from "@/assets/images/logo/logo-c.svg";
import Logo from "@/assets/images/logo/logo.svg";
import MobileLogoWhitemini from "@/assets/images/logo/logo-white-mini.svg";

const SidebarLogo = ({ menuHover }) => {
  const [isDark] = useDarkMode();
  const [collapsed, setMenuCollapsed] = useSidebar();
  // semi dark
  const [isSemiDark] = useSemiDark();
  // skin
  const [skin] = useSkin();
  return (
    <div
      className={` logo-segment flex justify-between items-center  z-[9] py-6 px-4  rounded-tr-[16px]
      ${menuHover ? "logo-hovered" : ""}
      ${
        skin === "bordered"
          ? " border-b border-r-0 border-slate-200 dark:border-slate-700"
          : " border-none"
      }
      
      `}
    >
      <Link to="/dashboard">
        <div className="flex items-center space-x-4">
          <div className="logo-icon">
            {!isDark && !isSemiDark ? (
              <img src={Logo} alt="" />
            ) : (
              <img src={Logo} alt="" />
            )}
          </div>

          {(!collapsed || menuHover) && (
            <div className="hidden">
              <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                DashCode
              </h1>
            </div>
          )}
        </div>
      </Link>

      {(!collapsed || menuHover) && (
        <div
          onClick={() => setMenuCollapsed(!collapsed)}
          className={` border-slate-900 dark:border-slate-700 transition-all duration-150 cursor-pointer`}
        >
          <Icon
          icon="heroicons-outline:menu-alt-2"
          className={`h-5 w-5 transition-all duration-150 ${
            collapsed
              ? "text-white dark:text-slate-400"
              : "text-white dark:text-slate-100"
          }`}
          />
        </div>
      )}
    </div>
  );
};

export default SidebarLogo;
