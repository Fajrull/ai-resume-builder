import Header from "@/components/custom/Header";
import ResumePreview from "@/components/custom/ResumePreview";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "@/service/GlobalApi";
import { Download } from "lucide-react";
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

  const handleDownload = () => {
    window.print();
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />
        <div className="w-full flex justify-center">
          <div className="mt-10 mx-10 md:mx-20 lg:mx-36">
            <h2 className="text-center text-2xl font-medium">Congratulations! Your AI-generated resume is ready.</h2>
            <p className="text-center text-gray-400">You can now download your resume and start using it to showcase your professional experience.</p>

            <div className="flex justify-end mt-5">
              <Button onClick={handleDownload}>
                <Download /> Download
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="my-10 mx-10 md:mx-20 lg:mx-36 w-[800px]">
          <div id="print-area">
            <ResumePreview />
          </div>
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
