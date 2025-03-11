import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import InformationCard from "@/components/ui/InformationCard";
import React from "react";
import img from "@/assets/images/all-img/view_certificate.png"
import Select from "@/components/ui/react-hook-form/Select";
import { Icon } from "@iconify/react";
const CognitiveAnswer = () => {
  return (
    <Card>
      <InformationCard
        title="Cognitive Answer"
      >
        <div className="mb-3">
            <p>1. Have You Ever Been Arrested And Charged With Any Offence And Are Awaiting, Or Currently On, Trial?</p>
            <div className="flex items-start justify-start gap-5 flex-wrap my-4">
              <label className="flex items-center space-x-2">
                  <Icon icon="akar-icons:radio" width="24" height="24" />
                  <span>a. Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <Icon icon="lets-icons:check-fill" width="24" height="24" className="text-green-900" />
                <span>b. No</span>
              </label>
            </div>
        </div>
        <div className="mb-3">
            <p>2. Have you been subject to, or received, any other penalty by a court or the police; for example caution, discharge, fine or community sentence in the Bangladesh or any other country?</p>
            <div className="flex items-start justify-start gap-5 flex-wrap my-4">
              <label className="flex items-center space-x-2">
                  <Icon icon="akar-icons:radio" width="24" height="24" />
                  <span>a. Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <Icon icon="lets-icons:check-fill" width="24" height="24" className="text-green-900" />
                <span>b. No</span>
              </label>
            </div>
        </div>
        <div className="mb-3">
            <p>3. Have you ever, by any means or medium, expressed views that justify or glorify terrorist violence or that may encourage others to terrorist acts or other serious criminal acts?</p>
            <div className="flex items-start justify-start gap-5 flex-wrap my-4">
              <label className="flex items-center space-x-2">
                  <Icon icon="akar-icons:radio" width="24" height="24" />
                  <span>a. Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <Icon icon="lets-icons:check-fill" width="24" height="24" className="text-green-900" />
                <span>b. No</span>
              </label>
            </div>
        </div>
      </InformationCard>
    </Card>
  );
};

export default CognitiveAnswer;
