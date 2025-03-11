import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./common/login-form";
import Social from "./common/social";
import useDarkMode from "@/hooks/useDarkMode";

// image import
import LogoWhite from "@/assets/images/logo/logo-white.svg";
import Logo from "@/assets/images/logo/logo.png";
import LoginPageSlider from "./common/LoginPageSlider";




const login = () => {
  const [isDark] = useDarkMode(); 
  return (
    <div className="p-20">
      <div className="mb-4 inline-block">
        <Link to="/" className="block">
          <img src={isDark ? LogoWhite : Logo} alt="logo" />
        </Link>
      </div>
      <div className="md:grid grid-cols-12 gap-8 bg-white p-10 shadow rounded-md" style={{
        boxShadow: '-8px 16px 32px 0px rgba(0, 0, 0, 0.4)',
      }}>
        <div className="col-span-12 md:col-span-6">
          <div className="h-full flex flex-col justify-center">
            <div>
              <div className="mb-5">
                <h1 className="text-4xl font-bold text-black-700 mb-2">Login to your account</h1>
                <span className="text-secondary-950 text-base">Welcome back! Please enter your details</span>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="col-span-6 hidden md:block">
          <div className="flex flex-col justify-center h-full items-center">
            <LoginPageSlider />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default login;
