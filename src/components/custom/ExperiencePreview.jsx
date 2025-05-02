import React from "react";

function ExperiencePreview({ resumeInfo }) {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-sm mb-2" style={{ color: resumeInfo?.themeColor }}>
        Professional Experience
      </h2>
      <hr className="border-[1.5px] my-2" style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.experience.map((experience, index) => (
        <div key={index} className="my-5">
          <h2 className="text-sm font-bold" style={{ color: resumeInfo?.themeColor }}>
            {experience?.positionTitle}
          </h2>
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
