import { Notebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function ResumeCardItem({ resume }) {
  return (
    <Link to={"/dashboard/resume/" + resume.documentId + "/edit"}>
      <div
        className="p-14 bg-secondary flex items-center justify-center
       h-[280px] border border-primary rounded-lg 
       hover:scale-105 transition-all hover:shadow-md shadow-primary"
      >
        <Notebook />
      </div>
      <h2 className="text-center my-1">{resume.title}</h2>
    </Link>
  );
}

export default ResumeCardItem;
