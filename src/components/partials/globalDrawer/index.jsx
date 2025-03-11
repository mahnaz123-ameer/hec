import React, { Fragment } from "react";
import Icon from "@/components/ui/Icon";
import { useSelector, useDispatch } from "react-redux";
import { Transition } from "@headlessui/react";
import { handleCustomizer } from "@/store/layout";
import useWidth from "@/hooks/useWidth";
import SimpleBar from "simplebar-react";

const GlobalDrawer = ({ children, ...props }) => {
  const isOpen = useSelector((state) => state.layout.customizer);
  const dispatch = useDispatch();
  // ** Toggles  Customizer Open
  const setCustomizer = (val) => dispatch(handleCustomizer(val));

  const { width, breakpoints } = useWidth();
  console.log(props, 'props')
  return (
    <div>
      <div
        className={`
        setting-wrapper fixed ltr:right-0 rtl:left-0 top-0 md:w-[640px] w-[100%]
         bg-white dark:bg-slate-800 h-screen z-[9999]  md:pb-6 pb-[100px] shadow-base2
          dark:shadow-base3 border border-slate-200 dark:border-slate-700 transition-all duration-150
          ${
            isOpen
              ? "translate-x-0 opacity-100 visible"
              : "ltr:translate-x-full rtl:-translate-x-full opacity-0 invisible"
          }
        `}
      >
        <SimpleBar className="px-6 h-full">
          <header className="flex items-center justify-between border-b bg-primary-900 -mx-6 px-6 py-[15px] mb-6 sticky top-0 z-50">
            <div>
              <span className="block text-xl text-white font-medium dark:text-[#eee]">
                {props?.title}
              </span>
            </div>
            <div
              className="cursor-pointer text-2xl text-white dark:text-slate-200"
              onClick={() => setCustomizer(false)}
            >
              <Icon icon="heroicons-outline:x" />
            </div>
          </header>
          <div className=" space-y-4">
             {children}
          </div>
        </SimpleBar>
      </div>

      <Transition as={Fragment} show={isOpen}>
        <div
          className="overlay bg-white bg-opacity-0 fixed inset-0 z-[999]"
          onClick={() => setCustomizer(false)}
        ></div>
      </Transition>
    </div>
  );
};

export default GlobalDrawer;
