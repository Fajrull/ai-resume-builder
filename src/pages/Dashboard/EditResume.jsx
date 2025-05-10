import FormSection from "@/components/custom/FormSection";
import ResumePreview from "@/components/custom/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditResume = () => {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    GetResumeInfo();
  }, []);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then((res) => {
      console.log(res.data.data);

      setResumeInfo(res.data.data);
    });
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form Section */}
        <FormSection />
        {/* Preview  Section*/}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default EditResume;
