import React from "react";

function SkillPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-sm mb-2">Skills</h2>
      <hr className="border-[1.5px] my-2" style={{ borderColor: "GrayText" }} />

      <div className="flex gap-3 flex-wrap justify-center">
        {resumeInfo?.skills?.length > 0 &&
          resumeInfo.skills.map((skill, index) => (
            <div key={index} className="border p-2 rounded-2xl">
              <h2 className="text-xs">{skill.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SkillPreview;
