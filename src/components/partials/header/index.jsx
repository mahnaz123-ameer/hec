import React from "react";
import Icon from "@/components/ui/Icon";
import HorizentalMenu from "./Tools/HorizentalMenu";
import useWidth from "@/hooks/useWidth";
import useSidebar from "@/hooks/useSidebar";
import useNavbarType from "@/hooks/useNavbarType";
import useMenulayout from "@/hooks/useMenulayout";
import useSkin from "@/hooks/useSkin";
import Logo from "./Tools/Logo";
import SearchModal from "./Tools/SearchModal";
import Profile from "./Tools/Profile";
import Notification from "./Tools/Notification";
import Message from "./Tools/Message";
import useRtl from "@/hooks/useRtl";
import useMobileMenu from "@/hooks/useMobileMenu";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MobileLogoWhitemini from "@/assets/images/logo/logo-white-mini.svg";
import { useSelector } from "react-redux";

const Header = ({ className = "custom-class bg-white" }, ...props) => {
  const { pageTitle } = useSelector((state) => state.commonSlice);
  const [collapsed, setMenuCollapsed] = useSidebar();
  const { width, breakpoints } = useWidth();
  const [navbarType] = useNavbarType();
  const navbarTypeClass = () => {
    switch (navbarType) {
      case "floating":
        return "floating  has-sticky-header";
      case "sticky":
        return "sticky top-0 z-[999]";
      case "static":
        return "static";
      case "hidden":
        return "hidden";
      default:
        return "sticky top-0";
    }
  };
  const [menuType] = useMenulayout();
  const [skin] = useSkin();
  const [isRtl] = useRtl();

  const [mobileMenu, setMobileMenu] = useMobileMenu();

  const handleOpenMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const borderSwicthClass = () => {
    if (skin === "bordered" && navbarType !== "floating") {
      return "border-b border-slate-200 dark:border-slate-700";
    } else if (skin === "bordered" && navbarType === "floating") {
      return "border border-slate-200 dark:border-slate-700";
    } else {
      return "dark:border-b dark:border-slate-700 dark:border-opacity-60";
    }
  };
  return (
      <header className={className + "  bg-white " + navbarTypeClass()}>
        <div
          className={` app-header md:px-6 px-[15px]  dark:bg-slate-800 bg-white
          ${borderSwicthClass()}
              ${
                menuType === "horizontal" && width > breakpoints.xl
                  ? "py-1"
                  : "md:py-6 py-3"
              }
          `}
        >
          <div className="flex justify-between items-center h-full flex-wrap w-full">
            {/* Breadcrumb  */} 
            <div className="flex items-center justify-start">
              <div>
                {menuType === "vertical" && (
                  <div className="flex items-center md:space-x-4 space-x-2 rtl:space-x-reverse">
                    {collapsed && width >= breakpoints.xl && (
                      <button
                        className="text-xl text-slate-900 dark:text-white"
                        onClick={() => setMenuCollapsed(!collapsed)}
                      >
                        {isRtl ? (
                          <Icon icon="akar-icons:arrow-left" />
                        ) : (
                          <Icon icon="akar-icons:arrow-right" />
                        )}
                      </button>
                    )}
                    {width < breakpoints.xl && <Logo />}
                    {/* open mobile menu handlaer*/}
                    {width < breakpoints.xl && width >= breakpoints.md && (
                      <div
                        className="cursor-pointer text-slate-900 dark:text-white text-2xl"
                        onClick={handleOpenMobileMenu}
                      >
                        <Icon icon="heroicons-outline:menu-alt-3" />
                      </div>
                    )}
                  </div>
                )}
                {/* For Horizontal  */}
                {menuType === "horizontal" && (
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Logo />
                    {/* open mobile menu handlaer*/}
                    {width <= breakpoints.xl && (
                      <div
                        className="cursor-pointer text-slate-900 dark:text-white text-2xl"
                        onClick={handleOpenMobileMenu}
                      >
                        <Icon icon="heroicons-outline:menu-alt-3" />
                      </div>
                    )}
                  </div>
                )}
                {/*  Horizontal  Main Menu */}
                {menuType === "horizontal" && width >= breakpoints.xl ? (
                  <HorizentalMenu />
                ) : null}
              </div>
              <div className="hidden md:flex">
                <Breadcrumbs />
              </div>
            </div>
            {/* Nav Tools  */}
            
            <div className="nav-tools flex items-center lg:space-x-3 space-x-3 rtl:space-x-reverse flex-wrap md:flex-nowrap">
              <SearchModal />
              {width >= breakpoints.md && <Message />}
              {width >= breakpoints.md && <Notification />}
              {width >= breakpoints.md && <Profile />}
              {width <= breakpoints.md && (
                <>
                  <Message />
                  <Notification />
                  <Profile />
                  <div
                    className="cursor-pointer text-slate-900 dark:text-white text-2xl"
                    onClick={handleOpenMobileMenu}
                  >
                    <Icon icon="heroicons-outline:menu-alt-3" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="md:px-6 px-[15px] flex items-center justify-start gap-2">
          <div>
            <button
              className="hidden md:flex text-slate-900 dark:text-white text-2xl hover:text-primary-500 transition duration-150"
              onClick={() => window.history.back()}
            >
              <Icon icon="material-symbols:arrow-back" />
            </button>
          </div>
          <div>
            <span className="grow text-2xl text-black-900 line-height-2xl capitalize font-semibold">{pageTitle}</span>
          </div>
        </div>
      </header>
  );
};

export default Header;
