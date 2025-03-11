import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import InformationCard from "@/components/ui/InformationCard";
import React from "react";
import img from "@/assets/images/all-img/view_certificate.png"
import Select from "@/components/ui/react-hook-form/Select";
const Documents = () => {
  const certifiacteList = [
    {
      title: "nidcard",
      img: img,
    },
    {
      title: "eExam",
      img: img,
    },
    {
      title: "eExam",
      img: img,
    },
    {
      title: "eExam",
      img: img,
    },
  ];
  return (
    <Card>
      <InformationCard
        title="National ID"
      >
        <div className="">
          <div className="flex items-start justify-start gap-5 flex-wrap">
            {certifiacteList.map((item, index) => {
              return (
                <div className="flex flex-col items-center justify-center gap-2">
                  <img src={item.img} alt="certificate" className="w-20 h-20" />
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-start mt-5 w-100 first-letter md:w-[35%]">
            <Select
              label="Change Status"
              options={["NID 1", "NID 2", "NID 3"]}
            />
          </div>
        </div>
      </InformationCard>
    </Card>
  );
};

export default Documents;
