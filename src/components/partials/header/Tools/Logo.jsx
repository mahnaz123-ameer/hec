import React from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { Link } from "react-router-dom";
import useWidth from "@/hooks/useWidth";

import MainLogo from "@/assets/images/logo/logo.svg";
import LogoWhite from "@/assets/images/logo/logo-white.svg";
import MobileLogo from "@/assets/images/logo/logo-c.svg";
import MinilogoColored from "@/assets/images/logo/logo-mini.svg";
import MobileLogoWhitemini from "@/assets/images/logo/logo-white-mini.svg";
const Logo = () => {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();

  return (
    <div>
      <Link to="/dashboard">
        {width >= breakpoints.xl ? (
          <img src={isDark ? MobileLogoWhitemini : MinilogoColored} alt="" />
        ) : (
          <img src={isDark ? MobileLogoWhitemini : MinilogoColored} alt="" />
        )}
      </Link>
    </div>
  );
};

export default Logo;
