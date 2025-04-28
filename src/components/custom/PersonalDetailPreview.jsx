import React from "react";

function PersonalDetailPreview({ resumeInfo }) {
  const contactItems = [
    { content: resumeInfo?.address, type: "text" },
    { content: resumeInfo?.phone, type: "text" },
    { content: resumeInfo?.email, type: "text" },
    {
      content: "GitHub",
      type: "link",
      href: resumeInfo?.github,
    },
    {
      content: "LinkedIn",
      type: "link",
      href: resumeInfo?.linkedIn,
    },
  ].filter((item) => item.content);

  return (
    <div>
      <h2 className="font-bold text-xl text-center" style={{ color: resumeInfo?.themeColor }}>
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium my-2">{resumeInfo?.jobTitle}</h2>

      <div className="flex justify-center items-center flex-wrap">
        {contactItems.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="mx-1 text-xs">|</span>}
            {item.type === "link" ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs underline" style={{ color: resumeInfo?.themeColor }}>
                {item.content}
              </a>
            ) : (
              <h2 className="text-xs">{item.content}</h2>
            )}
          </React.Fragment>
        ))}
      </div>
      <hr className="border-[1.5px] my-2" style={{ borderColor: resumeInfo?.themeColor }} />
    </div>
  );
}

export default PersonalDetailPreview;
