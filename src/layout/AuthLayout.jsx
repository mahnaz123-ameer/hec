import React, { useEffect, Suspense } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "@/components/Loading";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const classNames = ["bg-gradient-to-r", "from-[#1F75AA]", "to-[#1A4360]"];
    classNames.forEach((className) => document.body.classList.add(className));
  
    return () => {
      classNames.forEach((className) => document.body.classList.remove(className));
    };
  }, []);
  

  return (
    <>
      <div className="h-full">
        <div className="container h-full">
          <Suspense fallback={<Loading />}>
            <ToastContainer />
            {<Outlet />}
          </Suspense>
        </div>
      </div>
    </>
  )
};

export default AuthLayout;
