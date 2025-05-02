import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { LoaderCircle, Plus, Trash2 } from "lucide-react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "@/service/GlobalApi";
import { toast } from "sonner";

const formField = {
  positionTitle: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  currentlyWorking: false,
  workSummery: "",
};

function Experience({ enableNext }) {
  const [experienceList, setExperienceList] = useState([formField]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const handleChange = (index, event) => {
    const newEntries = [...experienceList];
    const { name, value, type, checked } = event.target;
    newEntries[index][name] = type === "checkbox" ? checked : value;
    setExperienceList(newEntries);
  };

  const addNewExperience = () => {
    const newExperience = {
      positionTitle: "",
      companyName: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      workSummery: "",
    };
    setExperienceList([...experienceList, newExperience]);
  };

  const removeExperience = () => {
    setExperienceList((prev) => prev.slice(0, -1));
  };

  const handleRichTextEditor = (e, name, index) => {
    const newEntries = [...experienceList];
    newEntries[index][name] = e.target.value;
    setExperienceList(newEntries);
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: {
        experience: experienceList.map(({ id, ...exp }) => ({
          ...exp,
          endDate: exp.currentlyWorking ? null : exp.endDate,
        })),
      },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (res) => {
        enableNext(true);
        setLoading(false);
        toast("Details experience updated");
      },
      (err) => {
        toast.error("Failed to update");
        setLoading(false);
      }
    );
  };

  return (
    <div>
      <div>
        <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-5">
          <h2 className="font-bold text-lg">Professional Experience</h2>
          <p>Add Your previous Job experience</p>

          {experienceList.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-2 border p-3 my-5 rounded-lg">
                <div>
                  <label className="text-xs">Position Title</label>
                  <Input name="positionTitle" value={item.positionTitle} onChange={(event) => handleChange(index, event)} />
                </div>
                <div>
                  <label className="text-xs">Company Name</label>
                  <Input name="companyName" value={item.companyName} onChange={(event) => handleChange(index, event)} />
                </div>
                <div>
                  <label className="text-xs">City</label>
                  <Input name="city" value={item.city} onChange={(event) => handleChange(index, event)} />
                </div>
                <div>
                  <label className="text-xs">State</label>
                  <Input name="state" value={item.state} onChange={(event) => handleChange(index, event)} />
                </div>
                <div>
                  <label className="text-xs">Start Date</label>
                  <Input type="date" name="startDate" value={item.startDate} onChange={(event) => handleChange(index, event)} />
                </div>
                <div>
                  <label className="text-xs">End Date</label>
                  <Input type="date" name="endDate" value={item.endDate} onChange={(event) => handleChange(index, event)} disabled={item.currentlyWorking} />
                  <div className="flex gap-2 my-2">
                    <input type="checkbox" name="currentlyWorking" checked={item.currentlyWorking} onChange={(event) => handleChange(index, event)} />
                    <label className="text-sm">I currently work here</label>
                  </div>
                </div>
                <div className="col-span-2">
                  <RichTextEditor index={index} onRichTextEditorChange={(event) => handleRichTextEditor(event, "workSummery", index)} value={item.workSummery} />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-5">
            <div className="flex gap-2">
              <Button variant="outline" className="text-primary" type="button" onClick={addNewExperience}>
                <Plus /> Add More Experience
              </Button>
              <Button variant="outline" className="text-primary" type="button" onClick={removeExperience}>
                <Trash2 /> Remove
              </Button>
            </div>
            <Button onClick={onSave} disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
