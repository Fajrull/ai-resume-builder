import React, { useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from "lucide-react";
import Summery from "./forms/Summery";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";
import { Link, Navigate, useParams } from "react-router-dom";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  // const [enableNext, setEnableNext] = useState(true);
  const { resumeId } = useParams();

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Link to={"/dashboard"}>
            <Button>
              <Home />
            </Button>
          </Link>
        </div>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button size="sm" onClick={() => setActiveFormIndex(activeFormIndex - 1)}>
              <ArrowLeft />
            </Button>
          )}
          <Button size="sm" onClick={() => setActiveFormIndex(activeFormIndex + 1)}>
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {activeFormIndex == 1 ? (
        <PersonalDetail />
      ) : activeFormIndex == 2 ? (
        <Summery />
      ) : activeFormIndex == 3 ? (
        <Experience />
      ) : activeFormIndex == 4 ? (
        <Education />
      ) : activeFormIndex == 5 ? (
        <Skills />
      ) : activeFormIndex == 6 ? (
        <Navigate to={`/my-resume/${resumeId}/view`} />
      ) : null}
    </div>
  );
}

export default FormSection;
