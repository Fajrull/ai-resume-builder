import Header from "@/components/custom/Header";
import ResumePreview from "@/components/custom/ResumePreview";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useParams();
  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then((res) => {
      setResumeInfo(res.data.data);
    });
  };

  useEffect(() => {
    GetResumeInfo();
  }, []);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <Header />
      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <h2 className="text-center text-2xl font-medium">Congrats! Your Ultimate AI geneares Resume is ready!</h2>
        <p className="text-center text-gray-400">Now you are ready to download your resume and you can share unique resume url with your friends and family</p>
        <div className="flex justify-between px-44 my-10">
          <Button>Download</Button>
          <Button>Share</Button>
        </div>
        <div>
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
