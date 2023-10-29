import { useState } from "react";
import "../.../../FAQ/FAQ.css";

export default function FAQ () {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "WHAT IS MINT PRICE ?",
      answer: "MINT PRICE IS 0PLS FOR WL & 440,000PLS FOR PUBLIC",
    },
    {
      question: "IS THIS JUST ANOTHER PFP ?",
      answer: "LAUNCH IS 28TH OCTOBER 2023",
    },
    {
      question: "WHAT IS MINT ALLOWANCE ?",
      answer: "MINT ALLOWANCE IS 5 PER WALLET",
    },
    {
      question: "WHEN LAUNCH ?",
      answer:
        "NO, THIS IS A BLUECHIP COLLECTIBLE & A PASS TO BE ABLE TO FREE MINT FROM OUR NEXT COLLECTION",
    },
  ];

  return (
    <div className="FAQmainDiv text-white">
      <h1 className="text-center">
        frequently asked
        <br /> questions
      </h1>
      <div className="FAQSection">
        <div className="d-sm-flex pb-5 pb-sm-0 border FAQ FAQSectionFlexBox">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="row FAQSectionFlexBox col-sm-5 justify-content-around"
            >
              <div className="col ">
                <button
                  className="buttonText w-100 py-4 px-5 d-flex justify-content-between bg-transparent text-white border"
                  onClick={() => handleToggle(index)}
                >
                  {item.question}
                  {activeIndex === index ? (
                    <svg
                      className="rotateIcon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <path
                        d="M15.276 11.8691V2.70247C15.276 2.21624 15.0829 1.74993 14.7391 1.40611C14.3953 1.06229 13.9289 0.869141 13.4427 0.869141C12.9565 0.869141 12.4902 1.06229 12.1463 1.40611C11.8025 1.74993 11.6094 2.21624 11.6094 2.70247V11.8691H2.44271C1.95648 11.8691 1.49016 12.0623 1.14635 12.4061C0.802529 12.7499 0.609375 13.2162 0.609375 13.7025C0.609375 14.1887 0.802529 14.655 1.14635 14.9988C1.49016 15.3427 1.95648 15.5358 2.44271 15.5358H11.6094V24.7025C11.6094 25.1887 11.8025 25.655 12.1463 25.9988C12.4902 26.3427 12.9565 26.5358 13.4427 26.5358C13.9289 26.5358 14.3953 26.3427 14.7391 25.9988C15.0829 25.655 15.276 25.1887 15.276 24.7025V15.5358H24.4427C24.9289 15.5358 25.3953 15.3427 25.7391 14.9988C26.0829 14.655 26.276 14.1887 26.276 13.7025C26.276 13.2162 26.0829 12.7499 25.7391 12.4061C25.3953 12.0623 24.9289 11.8691 24.4427 11.8691H15.276Z"
                        fill="#3B629C"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <path
                        d="M15.276 11.8691V2.70247C15.276 2.21624 15.0829 1.74993 14.7391 1.40611C14.3953 1.06229 13.9289 0.869141 13.4427 0.869141C12.9565 0.869141 12.4902 1.06229 12.1463 1.40611C11.8025 1.74993 11.6094 2.21624 11.6094 2.70247V11.8691H2.44271C1.95648 11.8691 1.49016 12.0623 1.14635 12.4061C0.802529 12.7499 0.609375 13.2162 0.609375 13.7025C0.609375 14.1887 0.802529 14.655 1.14635 14.9988C1.49016 15.3427 1.95648 15.5358 2.44271 15.5358H11.6094V24.7025C11.6094 25.1887 11.8025 25.655 12.1463 25.9988C12.4902 26.3427 12.9565 26.5358 13.4427 26.5358C13.9289 26.5358 14.3953 26.3427 14.7391 25.9988C15.0829 25.655 15.276 25.1887 15.276 24.7025V15.5358H24.4427C24.9289 15.5358 25.3953 15.3427 25.7391 14.9988C26.0829 14.655 26.276 14.1887 26.276 13.7025C26.276 13.2162 26.0829 12.7499 25.7391 12.4061C25.3953 12.0623 24.9289 11.8691 24.4427 11.8691H15.276Z"
                        fill="#3B629C"
                      />
                    </svg>
                  )}
                </button>
                <div className="my-4 my-sm-5 py-2 px-5 position-relative ">
                  {activeIndex === index && (
                    <p className="position-absolute top-0">{item.answer}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


