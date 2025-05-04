import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";

function Education() {
  const [loading, setLoading] = useState(false);
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
    const values = [...educationList];
    values[index][event.target.name] = event.target.value;
    setEducationList(values);
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
        description: "",
      },
    ]);
  };

  const removeEducation = () => {};

  const onSave = () => {};

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-5">
        <h2 className="font-bold text-lg">Education</h2>
        <p>Add Your educational details</p>
        <div>
          {educationList.map((education, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                <div>
                  <label>University Name</label>
                  <Input name="universityName" onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label>Degree</label>
                  <Input name="degree" onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label>Major</label>
                  <Input name="major" onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label>Start Date</label>
                  <Input name="startDate" onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label>End Date</label>
                  <Input name="endDate" onChange={(e) => handleChange(index, e)} />
                </div>
                <div>
                  <label>Description</label>
                  <Textarea name="description" onChange={(e) => handleChange(index, e)} />
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
