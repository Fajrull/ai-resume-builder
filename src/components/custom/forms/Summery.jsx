import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import generateSummary from "@/service/AIModel";
import GlobalApi from "@/service/GlobalApi";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function Summery({ enableNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summery, setSummery] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [aiGenerateSummeryList, setAiGenerateSummeryList] = useState();

  useEffect(() => {
    summery &&
      setResumeInfo({
        ...resumeInfo,
        summery: summery,
      });
  }, [summery]);

  const GenerateSummeryFromAI = async () => {
    try {
      setLoading(true);
      const prompt =
        "Job Title: " +
        resumeInfo?.jobTitle +
        ". Based on this job title, give me a list of summaries for 3 experience levels: Fresher, Mid Level and Senior level in 3-4 lines in array format. Include 'summary' and 'experience_level' fields in JSON format.";
      const aiResult = await generateSummary(prompt);

      const cleanedResult = aiResult.replace(/```json/g, "").replace(/```/g, "");

      const parsedResult = JSON.parse(cleanedResult);

      console.log(parsedResult);

      setAiGenerateSummeryList(parsedResult);

      toast.success("Summary generated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate summary");
    } finally {
      setLoading(false);
    }
  };

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
            <Button onClick={GenerateSummeryFromAI} className="border-primary text-primary" size="sm" variant="outline" type="button">
              <Brain /> Generate from AI
            </Button>
          </div>
          <Textarea className="mt-5 p-5" required onChange={(e) => setSummery(e.target.value)} value={summery} />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGenerateSummeryList && (
        <div>
          <h2 className="font-bold text-lg mt-6 ">Suggestions</h2>
          {aiGenerateSummeryList.map((item, index) => (
            <div key={index} className="border p-3 my-6 shadow-lg rounded-lg border-t-primary border-t-4 cursor-pointer" onClick={() => setSummery(item?.summary)}>
              <h2 className="font-bold my-1">Level: {item?.experience_level}</h2>
              <p>{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summery;
