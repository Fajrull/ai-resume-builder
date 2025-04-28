import ResumeCardItem from "@/components/custom/ResumeCardItem";
import GlobalApi from "@/service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import AddResume from "./AddResume";

const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && GetResumeList();
  }, [user]);

  // Used to Get Users Resume List
  const GetResumeList = () => {
    GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress).then((res) => {
      setResumeList(res.data.data);
    });
  };

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI resume to your job role</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5">
        <AddResume />
        {resumeList.length > 0 && resumeList.map((resume, index) => <ResumeCardItem resume={resume} key={index} />)}
      </div>
    </div>
  );
};

export default Dashboard;
