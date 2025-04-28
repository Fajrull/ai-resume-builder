import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext } from "react";

const PersonalDetail = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-5">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the basic information</p>
    </div>
  );
};

export default PersonalDetail;
