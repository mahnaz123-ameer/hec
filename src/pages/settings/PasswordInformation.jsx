import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import InformationCard from "@/components/ui/InformationCard";
import React, { useState } from "react";
import ChangePassword from "./ChangePassword";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleCustomizer } from "@/store/layout";
import GlobalDrawer from "@/components/partials/globalDrawer";

const PasswordInformation = () => {
  const dispatch = useDispatch();
    const {customizer} = useSelector((state) => state.layout);
    const [currentDrawer, setCurrentDrawer] = useState(null);
    const [currentDrawerTitle, setCurrentDrawerTitle] = useState(null);

  const toggleDrawer = (val) => {
    switch(val){
        case "changePassword":
            setCurrentDrawer(<ChangePassword  />);
            setCurrentDrawerTitle("Change Password");
            dispatch(handleCustomizer(true));
            break;
        default:
            break;
    }
};
  return (
    <>
      <Card>
        <InformationCard title="your password" actionButton={<Button text="Change Password" icon={`heroicons:pencil-square`} onClick={() => toggleDrawer('changePassword')}></Button>}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 shadow-lg p-5 border border-bottom-0 rounded-md">
              <div className="space-y-8">
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 uppercase mb-3"
                    >
                      Current password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={"123456789"}
                      disabled
                      className="block w-full px-3 py-2 text-base text-gray-700 transition duration-150 ease-in-out bg-secondary-200 dark:bg-slate-800 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your password"
                    />
                  </div>
                  
              </div>
          </div>
        </InformationCard>
      </Card>
      {customizer && 
          <GlobalDrawer title={currentDrawerTitle}>
              {currentDrawer !== null && currentDrawer}
          </GlobalDrawer>
      }
    </>
  );
};

export default PasswordInformation;
