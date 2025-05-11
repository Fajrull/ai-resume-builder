import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";

function ResumeCardItem({ resume }) {
  return (
    <Link to={"/dashboard/resume/" + resume.documentId + "/edit"} className="block group">
      <div className="relative rounded-xl border border-border bg-gradient-to-br from-card to-background p-6 transition-all duration-300 hover:shadow-lg group-hover:border-primary/40 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>

        {/* Resume label */}
        <div className="absolute top-4 right-4">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">Resume</span>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
            <Notebook className="h-5 w-5 text-primary" />
          </div>
          <h2 className="font-medium text-lg truncate">{resume.title}</h2>
        </div>

        <div className="flex-1 flex items-center justify-center my-4">
          <div className="relative w-full h-28 bg-muted/30 rounded-lg flex items-center justify-center overflow-hidden">
            {/* Document lines decoration */}
            <div className="absolute w-full h-full flex flex-col justify-around px-6 opacity-30">
              <div className="h-1 w-full bg-muted-foreground/20 rounded"></div>
              <div className="h-1 w-3/4 bg-muted-foreground/20 rounded"></div>
              <div className="h-1 w-5/6 bg-muted-foreground/20 rounded"></div>
              <div className="h-1 w-2/3 bg-muted-foreground/20 rounded"></div>
            </div>

            <span className="text-2xl font-semibold text-primary/20 uppercase tracking-wider">Resume</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
          <span>Last edited: {new Date().toLocaleDateString()}</span>
          <span className="text-primary/70 group-hover:text-primary transition-colors">View & Edit</span>
        </div>
      </div>
    </Link>
  );
}

export default ResumeCardItem;
