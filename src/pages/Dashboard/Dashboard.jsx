"use client";

import ResumeCardItem from "@/components/custom/ResumeCardItem";
import GlobalApi from "@/service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import AddResume from "./AddResume";
import { FileText, Plus } from "lucide-react";

const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      GetResumeList();
    }
  }, [user]);

  // Used to Get Users Resume List
  const GetResumeList = () => {
    setIsLoading(true);
    GlobalApi.GetUserResume(user?.primaryEmailAddress?.emailAddress)
      .then((res) => {
        setResumeList(res.data.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-10 md:py-16">
        {/* Header Section */}
        <div className="mb-10 space-y-2">
          <div className="flex items-center gap-2">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">My Resumes</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">Create professional AI-powered resumes tailored to your target job roles and stand out to employers.</p>
        </div>

        {/* Content Section */}
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800/50">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-64 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700" />
              ))}
            </div>
          ) : (
            <>
              {resumeList.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">No resumes yet</h3>
                  <p className="mb-6 text-muted-foreground max-w-md">Create your first AI-powered resume to get started on your job search journey.</p>
                  <AddResume />
                </div>
              ) : (
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Your Collection</h2>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {resumeList.length} {resumeList.length === 1 ? "Resume" : "Resumes"}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="group relative flex h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 transition-all hover:border-primary/50 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-primary/30 dark:hover:bg-slate-800">
                      <div className="mb-4 rounded-full bg-primary/10 p-3">
                        <Plus className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-1 text-center text-lg font-medium">Create New Resume</h3>
                      <p className="text-center text-sm text-muted-foreground">Generate a tailored resume for your next opportunity</p>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0">
                        <AddResume />
                      </div>
                    </div>

                    {resumeList.map((resume, index) => (
                      <div key={index} className="transform transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
                        <ResumeCardItem resume={resume} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
