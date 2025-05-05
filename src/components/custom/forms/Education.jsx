import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle, Plus, Trash2 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

function Education() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [educationList, setEducationList] = useState([
    {
      universityName: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleChange = (index, event) => {
    const newEntries = [...educationList];
    const { name, value, type, checked } = event.target;
    if (type === "checkbox" && name === "currentlyEducating") {
      newEntries[index][name] = checked;
      if (checked) {
        newEntries[index]["endDate"] = "";
      }
    } else {
      newEntries[index][name] = value;
    }
    setEducationList(newEntries);
  };

  const addNewEducation = () => {
    setEducationList([
      ...educationList,
      {
        universityName: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        currentlyEducating: false,
        description: "",
      },
    ]);
  };

  const removeEducation = () => {
    if (educationList.length > 1) {
      setEducationList(educationList.slice(0, -1));
    } else {
      toast.warning("At least one education must be present");
    }
  };

  const onSave = () => {};

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      education: educationList,
    });
  }, [educationList]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-5">
        <h2 className="font-bold text-lg">Education</h2>
        <p>Add Your educational details</p>
        <div>
          {educationList.map((education, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div className="col-span-2">
                  <label>University Name</label>
                  <Input name="universityName" value={education.universityName} onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label>Degree</label>
                  <Input name="degree" value={education.degree} onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label>Major</label>
                  <Input name="major" value={education.major} onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label>Start Date</label>
                  <Input type="date" value={education.startDate} name="startDate" onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label>End Date</label>
                  <Input type="date" name="endDate" value={education.endDate} onChange={(e) => handleChange(index, e)} disabled={education.currentlyEducating} />
                  <div className="flex gap-2 my-2">
                    <input type="checkbox" name="currentlyEducating" checked={education.currentlyEducating} onChange={(event) => handleChange(index, event)} />
                    <label className="text-sm">I currently studying here</label>
                  </div>
                </div>
                <div className="col-span-2">
                  <label>Description</label>
                  <Textarea name="description" value={education.description} onChange={(e) => handleChange(index, e)} />
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <div className="flex gap-2">
                  <Button variant="outline" className="text-primary" type="button" onClick={addNewEducation}>
                    <Plus /> Add More Education
                  </Button>
                  <Button variant="outline" className="text-primary" type="button" onClick={removeEducation}>
                    <Trash2 /> Remove
                  </Button>
                </div>
                <Button onClick={onSave} disabled={loading}>
                  {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
