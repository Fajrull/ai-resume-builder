import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import GlobalApi from "@/service/GlobalApi";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

// const prompt = "Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";

function Summery({ enableNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summery, setSummery] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    summery &&
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      });
  }, [summery]);

  const GenerateSummeryFromAI = async () => {};

  const onSave = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: {
        summery: summery,
      },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoading(false);
        toast("Details updated");
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-5">
        <h2 className="font-bold text-lg">Summary Detail</h2>
        <p>Add Summery for your job title</p>
        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summery</label>
            <Button onClick={() => GenerateSummeryFromAI()} className="border-primary text-primary" size="sm" variant="outline" type="button">
              <Brain /> Generate from AI
            </Button>
          </div>
          <Textarea className="mt-2" required onChange={(e) => setSummery(e.target.value)} />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Summery;
