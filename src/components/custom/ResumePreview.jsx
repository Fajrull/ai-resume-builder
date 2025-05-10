import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext } from "react";
import PersonalDetailPreview from "./PersonalDetailPreview";
import SummeryPreview from "./SummeryPreview";
import ExperiencePreview from "./ExperiencePreview";
import EducationPreview from "./EducationPreview";
import SkillPreview from "./SkillPreview";

function ResumePreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: "black",
      }}
    >
      {/* Personal Detail */}
      <PersonalDetailPreview resumeInfo={resumeInfo} />

      {/* Summery */}
      <SummeryPreview resumeInfo={resumeInfo} />

      {/* Profesional Experience */}
      <ExperiencePreview resumeInfo={resumeInfo} />

      {/* Education */}
      <EducationPreview resumeInfo={resumeInfo} />

      {/* Skills */}
      <SkillPreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default ResumePreview;
