import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, LoaderCircle } from "lucide-react";
import React, { useState, useEffect, useContext } from "react";
import { toast } from "sonner";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "@/service/GlobalApi";

function Skills() {
  const [skills, setSkills] = useState([{ name: "" }]);
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();

  const handleChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index].name = event.target.value;
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, { name: "" }]);
  };

  const removeSkill = (index) => {
    if (skills.length > 1) {
      setSkills(skills.slice(0, -1));
    } else {
      toast.warning("At least one skill must be present");
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      data: {
        skills,
      },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      () => {
        setLoading(false);
        toast("Skills updated successfully");
      },
      () => {
        setLoading(false);
        toast.error("Server error, please try again");
      }
    );
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skills,
    });
  }, [skills]);

  useEffect(() => {
    if (resumeInfo?.skills?.length > 0) {
      setSkills(resumeInfo.skills);
    }
  }, []);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-5">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add your top professional key skills</p>

      {skills.map((skill, index) => (
        <div key={index} className="flex gap-2 items-center mt-3">
          <Input value={skill.name} onChange={(e) => handleChange(index, e)} placeholder="e.g. JavaScript, React, Node.js" />
          <Button variant="outline" type="button" onClick={() => removeSkill(index)} className="text-destructive">
            <Trash2 size={16} />
          </Button>
        </div>
      ))}

      <div className="flex justify-between mt-5">
        <Button variant="outline" className="text-primary" type="button" onClick={addSkill}>
          <Plus /> Add More Skill
        </Button>
        <Button onClick={onSave} disabled={loading}>
          {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Skills;
