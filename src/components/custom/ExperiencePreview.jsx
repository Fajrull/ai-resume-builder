import formatDate from "@/utils/formatDate";
import React from "react";

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-sm mb-2">Professional Experience</h2>
      <hr className="border-[1.5px] my-2" style={{ borderColor: "GrayText" }} />

      {resumeInfo?.experience.map((experience, index) => (
        <div key={index} className="my-5">
          <h2 className="text-sm font-bold">{experience?.positionTitle}</h2>
          <h2 className="text-xs flex justify-between">
            {experience?.companyName},{experience?.city},{experience?.state}
            <span>
              {formatDate(experience?.startDate)} - {experience?.currentlyWorking ? "Present" : formatDate(experience?.endDate)}
            </span>
          </h2>
          {/* <p className="text-xs my-2">{experience.workSummery}</p> */}
          <div dangerouslySetInnerHTML={{ __html: experience?.workSummery }} className="text-xs my-2 rsw-ce"></div>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
