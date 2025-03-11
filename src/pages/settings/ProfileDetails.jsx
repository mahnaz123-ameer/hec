import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import React, { useState } from "react";
import BasicInformationEdit from "./BasicInformationEdit";
import GlobalDrawer from "@/components/partials/globalDrawer";
import { useDispatch } from "react-redux";
import { handleCustomizer } from "@/store/layout";
import { useSelector } from "react-redux";
import InformationCard from "@/components/ui/InformationCard";
import AddressEdit from "./AddressEdit";
import ChangePassword from "./PasswordInformation";

const ProfileDetails = () => {
    const dispatch = useDispatch();
    const {customizer} = useSelector((state) => state.layout);
    const [currentDrawer, setCurrentDrawer] = useState(null);
    const [currentDrawerTitle, setCurrentDrawerTitle] = useState(null);

    const toggleDrawer = (val) => {
        switch(val){
            case "basicInformation":
                setCurrentDrawer(<BasicInformationEdit />);
                setCurrentDrawerTitle("Edit Basic Information");
                dispatch(handleCustomizer(true));
                break;
            case "address":
                setCurrentDrawer(<AddressEdit />);
                setCurrentDrawerTitle("Edit Address");
                dispatch(handleCustomizer(true));
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Card>
                <InformationCard title="Basic Information" actionButton={<Button text="Edit" icon={`heroicons:pencil-square`} onClick={() => toggleDrawer('basicInformation')}></Button>}>
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 p-5 shadow-lg border border-bottom-0 rounded-md">
                        <div className="lg:col-span-6 col-span-12 md:border-r border-slate-200 dark:border-slate-800 border-dashed ">
                            <div>
                                <h5 className="text-base text-slate-600 dark:text-slate-300 mb-4">
                                Information
                                </h5>
                                <div className="space-y-4">
                                    <div>
                                        <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
                                        FIRST NAME
                                        </span>
                                        <span className="block text-base text-slate-900 dark:text-slate-200">
                                        Admin First Name
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
                                        LAST NAME
                                        </span>
                                        <span className="block text-base text-slate-900 dark:text-slate-200">
                                        Admin Last Name
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
                                        ROLE
                                        </span>
                                        <span className="block text-base text-slate-900 dark:text-slate-200">
                                        Admin
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
                                        DATE OF BIRTH
                                        </span>
                                        <span className="block text-base text-slate-900 dark:text-slate-200">
                                        July 04, 1999
                                        </span>
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
                                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
                                    PRIMARY PHONE
                                    </span>
                                    <span className="block text-base text-slate-900 dark:text-slate-200">
                                    (+880) 19XXXXXXXX
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
                                    ALTERNATE PHONE
                                    </span>
                                    <span className="block text-base text-slate-900 dark:text-slate-200">
                                    (+880) 19XXXXXXXX
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
                                    EMAIL
                                    </span>
                                    <span className="block text-base text-slate-900 dark:text-slate-200">
                                    tutor123@gamil.com
                                    </span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>.
                </InformationCard>
                <div className="mt-6 pt-6 ">
                    <InformationCard title="Address" actionButton={<Button text="Edit" icon={`heroicons:pencil-square`} onClick={() => toggleDrawer('address')}></Button>}> 
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 shadow-lg p-5 border border-bottom-0 rounded-md">
                            <div>
                                <div className="space-y-4">
                                <div>
                                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
                                    DIVISION
                                    </span>
                                    <span className="block text-base text-slate-900 dark:text-slate-200">
                                    Dhaka
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
                                    AREA
                                    </span>
                                    <span className="block text-base text-slate-900 dark:text-slate-200">
                                    Rampura
                                    </span>
                                </div>
                                </div>
                            </div>
                            <div>
                                <div className="space-y-4">
                                <div>
                                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
                                    DISTRICT
                                    </span>
                                    <span className="block text-base text-slate-900 dark:text-slate-200">
                                    Dhaka
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
                                    ADDRESS
                                    </span>
                                    <span className="block text-base text-slate-900 dark:text-slate-200">
                                    Banasree, Rampura, Dhaka
                                    </span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </InformationCard>
                </div>
            </Card>
            {customizer && 
                <GlobalDrawer title={currentDrawerTitle}>
                    {currentDrawer !== null && currentDrawer}
                </GlobalDrawer>
            }
        </>
    );
};

export default ProfileDetails;
