import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Modal from "@/components/ui/Modal";
import InformationCard from "@/components/ui/InformationCard";
import React, { useState } from "react";

const LogedinDevices = () => {
  const [showModal, setShowModal] = useState(false);
  const devices = [
    {
      id: 1,
      name: "Google Chrome (Windows)",
      icon: "https://shorturl.at/FCngH",
      lastActivity: "Last activity 12 October, 12:00 pm",
    },
    {
      id: 2,
      name: "iPhone 13 mini",
      icon: "https://shorturl.at/FCngH",
      lastActivity: "Last activity today, 11:58 am",
    },
  ];

  const showHideModal = () => {
    setShowModal(!showModal);
  };


  return (
    <>
      <Card>
        <InformationCard title="logged in devices">
          <Card>
            <div className="flex flex-col gap-5">
              <div className="flex-1">
                <div className="card-title mb-1">Device Status</div>
                <div className="text-slate-500 dark:text-slate-300 text-base">
                  Tap a device to log out.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {devices.map((device) => (
                  <div
                    key={device.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition duration-150 shadow-lg"
                    onClick={showHideModal}
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex-none">
                        <div className="h-10 w-10">
                          <img
                            src={device.icon}
                            alt={device.name}
                            className="block w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-medium text-slate-800 dark:text-slate-200">
                          {device.name}
                        </div>
                        <div className="text-sm font-light text-slate-600 dark:text-slate-300">
                          {device.lastActivity}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full text-center mt-5">
                <p className="text-black-900  text-base mb-3">
                  Logged out from
                </p>
                <div className="flex justify-center gap-4">
                  <Button text="Other Devices" className="btn-outline-primary" />
                  <Button text="All Devices" />
                </div>
              </div>
            </div>
          </Card>
        </InformationCard>
      </Card>
      <Modal activeModal={showModal} onClose={showHideModal} centered={true} disableBackdrop={false} className="md:w-[460px]" showHeader={false}>
        <div className="h-10 w-10">
          <img
            src="https://shorturl.at/FCngH"
            alt="shorturl"
            className="block w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="text-base font-medium text-slate-800 dark:text-slate-200">
            Google Chrome (Windows)
          </div>
          <div className="text-sm font-light text-slate-600 dark:text-slate-300">
          Last activity 12 October, 12:00 pm
          </div>
        </div>
        <div className="flex justify-end items-center gap-4 mt-5">
          <Button text="Log out" className="btn-outline-primary" />
          <Button onClick={showHideModal} text="Cancel" />
        </div>
      </Modal>
    </>
  );
};

export default LogedinDevices;
