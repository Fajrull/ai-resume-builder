import React, { useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(2);
  console.log(activeFormIndex);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayoutGrid /> Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button size="sm" onClick={() => setActiveFormIndex(activeFormIndex - 1)}>
              <ArrowLeft />
            </Button>
          )}
          <Button className="flex gap-2" size="sm" onClick={() => setActiveFormIndex(activeFormIndex + 1)}>
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Detail */}
      <PersonalDetail />

      {/* Summery */}

      {/* Experience */}

      {/* Education Detail */}

      {/* Skills */}
    </div>
  );
}

export default FormSection;
