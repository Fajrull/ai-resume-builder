import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState } from "react";
import { Editor, EditorProvider, BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnStyles, BtnUnderline, BtnUndo, HtmlButton, Separator, Toolbar } from "react-simple-wysiwyg";
import { Button } from "../ui/button";
import generateSummary from "@/service/AIModel";
import { toast } from "sonner";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";

function RichTextEditor({ value, onRichTextEditorChange, index }) {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const GenerateSummeryFromAI = async () => {
    try {
      setLoading(true);

      const prompt =
        "Position title:{positionTitle} " +
        resumeInfo?.experience[index].positionTitle +
        ". Based on the position title, write 5-7 concise bullet points describing relevant responsibilities or achievements suitable for a resume. Return only HTML <ul><li>...</li></ul> format. Do not include experience level or JSON.";

      console.log(resumeInfo?.experience[index].positionTitle);

      const aiResult = await generateSummary(prompt);
      const cleanedResult = aiResult.replace(/```html|```/g, "").trim();

      onRichTextEditorChange({ target: { value: cleanedResult } });
      toast.success("Summary generated successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate summary");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-3 items-center">
        <label className="text-xs">Summery</label>
        <Button variant="outline" size="sm" onClick={GenerateSummeryFromAI} disabled={loading} className="flex gap-2 border-primary text-primary">
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={(e) => {
            onRichTextEditorChange(e);
          }}
        >
          <Toolbar>
            <BtnUndo />
            <BtnRedo />
            <Separator />
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <BtnClearFormatting />
            <HtmlButton />
            <Separator />
            <BtnStyles />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
