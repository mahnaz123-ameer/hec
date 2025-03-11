import GlobalDrawer from "@/components/partials/globalDrawer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import InformationCard from "@/components/ui/InformationCard";
import { handleCustomizer } from "@/store/layout";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import BasicInformationForm from "./forms/BasicInformationForm";
import AddressInformationForm from "./forms/AddressInformationForm";

const BasicInformation = () => {
  const {customizer} = useSelector((state) => state.layout);
  const dispatch = useDispatch();
  const [currentDrawerTitle, setCurrentDrawerTitle] = useState(null);
  const [currentDrawer, setCurrentDrawer] = useState(null);

  const toggleDrawer = (val) => {
    switch(val){
        case "basicInformation":
            dispatch(handleCustomizer(true));
            setCurrentDrawer(<BasicInformationForm updateForm={true} />);
            setCurrentDrawerTitle("Edit Basic Information");
            break;
        case "address":
            dispatch(handleCustomizer(true));
            setCurrentDrawer(<AddressInformationForm updateForm={true} />);
            setCurrentDrawerTitle("Edit Address");
            break;
    }
  }

  return (
    <>
      <InformationCard
        title="Basic Information"
        actionButton={
          <Button
            text="Edit"
            icon={`heroicons:pencil-square`}
            onClick={() => toggleDrawer("basicInformation")}
          ></Button>
        }
      >
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 p-5 shadow-lg border border-bottom-0 rounded-md">
          <div className="lg:col-span-6 col-span-12 md:border-r border-slate-200 dark:border-slate-800 border-dashed ">
            <div>
              <h5 className="text-base text-slate-600 dark:text-slate-300 mb-4">
                Biography
              </h5>
              <p className="text-base text-slate-900 dark:text-slate-200">
                Hi, I have 5 years experience in teaching profession. I can make
                easier students lesson what is very effective. Hi, I have 5
                years experience in teaching profession. I can make easier
                students lesson what is very effective.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4 mt-4">
                  <div>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                      father’s name
                    </span>
                    <span className="block text-base text-slate-900 dark:text-slate-200">
                      Admin First Name
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                      Mother’s Name
                    </span>
                    <span className="block text-base text-slate-900 dark:text-slate-200">
                      Admin
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                      DATE OF BIRTH
                    </span>
                    <span className="block text-base text-slate-900 dark:text-slate-200">
                      July 04, 1999
                    </span>
                  </div>
                </div>
                <div className="space-y-4 mt-4">
                  <div>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                      Religion
                    </span>
                    <span className="block text-base text-slate-900 dark:text-slate-200">
                      Islam
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                      Blood group
                    </span>
                    <span className="block text-base text-slate-900 dark:text-slate-200">
                      O+
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                      Marital status
                    </span>
                    <span className="block text-base text-slate-900 dark:text-slate-200">
                      Single
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 space-y-5">
            <div>
              <h5 className="text-base text-slate-600 dark:text-slate-300 mb-4">
                Contact Details
              </h5>
              <div className="space-y-4">
                <div>
                  <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                    PRIMARY PHONE
                  </span>
                  <span className="block text-base text-slate-900 dark:text-slate-200">
                    (+880) 19XXXXXXXX
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                    ALTERNATE PHONE
                  </span>
                  <span className="block text-base text-slate-900 dark:text-slate-200">
                    (+880) 19XXXXXXXX
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                    EMAIL
                  </span>
                  <span className="block text-base text-slate-900 dark:text-slate-200">
                    tutor123@gamil.com
                  </span>
                </div>
                <div>
                  <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                    tutor id
                  </span>
                  <span className="block text-base text-slate-900 dark:text-slate-200">
                    12345678
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InformationCard>
      <div className="mt-6">
        <InformationCard
          title="Address"
          actionButton={
            <Button
              text="Edit"
              icon={`heroicons:pencil-square`}
              onClick={() => toggleDrawer("address")}
            ></Button>
          }
        >
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 p-5 shadow-lg border border-bottom-0 rounded-md">
              <div className="lg:col-span-12 col-span-12 space-y-5">
                <div className="space-y-4">
                  <div>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                      present address
                    </span>
                    <span className="block text-base text-slate-900 dark:text-slate-200">
                      Bashtola, Vatara, Gulshan 2, Dhaka
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2 uppercase">
                      permanent address
                    </span>
                    <span className="block text-base text-slate-900 dark:text-slate-200">
                      Thana:Gabtali, Bogura 5820, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </InformationCard>
      </div>
      {customizer && 
          <GlobalDrawer title={currentDrawerTitle}>
              {currentDrawer}
          </GlobalDrawer>
      }
    </>
  );
};

export default BasicInformation;
