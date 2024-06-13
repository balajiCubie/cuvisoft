"use client"

// components/Tab.tsx
import Image from "next/image";
import React, { useState } from "react";
export type StaticImport = any;

interface TabContentProps {
  open: string;
  tabCategory: string;
  details: string;
  contentImage:String | StaticImport;
}

const TabContent: React.FC<TabContentProps> = ({ open, tabCategory, details, contentImage }) => {
  return (
    // content in one coloum and image in another coloum
    <div className=" max-w-[47rem] w-full mx-auto">
      <div
        className={`p-6 text-base leading-relaxed text-body-color dark:text-dark-6 ${
          open === tabCategory ? "block" : "hidden"
        }`}
      >
        <div className=" flex">
        <div>
        {details}
        </div>
        <div className="absolute float-right right-0  mt-1 mr-60">

        <Image src={contentImage} className=" rounded-3xl " alt="alt" width={500} height={100} />
        </div>
        </div>
      </div>
    </div>
  );
};

const TabAi: React.FC = () => {
  const [open, setOpen] = useState<string>("home");

  const handleTabOpen = (tabCategory: string) => {
    setOpen(tabCategory);
  };

  return (
    <>
      <section className=" dark:bg-dark lg:py-[30px]">
        <div className="">
          <div className=" flex ">
            <div className=" ">
              <div className=" w-full">
                <div className="flex   rounded-full  border border-[#020202]  p-2 dark:border-dark-3 sm:flex-row">
                  <a
                    onClick={() => handleTabOpen("home")}
                    className={`cursor-pointer rounded-full bg-gray-100  py-3 text-sm font-medium md:text-base lg:px-6 ${
                      open === "home"
                        ? "px-4 py-2 text-black rounded-full bg-gradient-to-r from-green-200 via-blue-200 to-purple-200"
                      : "text-body-color hover:bg-primary hover:bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 dark:text-dark-6 dark:hover:text-white"
                    }`}
                  >
                    Scalable applications
                  </a>
                  <a
                    onClick={() => handleTabOpen("about")}
                    className={`cursor-pointer rounded-full px-4 bg-gray-100 py-3 text-sm font-medium md:text-base lg:px-6 ${
                      open === "about"
                        ? "px-4 py-2 text-black rounded-full bg-gradient-to-r from-green-200 via-blue-200 to-purple-200"
                        : "text-body-color hover:bg-primary hover:bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 dark:text-dark-6 dark:hover:text-white"
                    }`}
                  >
                    Responsible AI
                  </a>
                  <a
                    onClick={() => handleTabOpen("team")}
                    className={`cursor-pointer rounded-full px-4 bg-gray-100 py-3 text-sm font-medium md:text-base lg:px-6 ${
                      open === "team"
                        ? "px-4 py-2 text-black rounded-full bg-gradient-to-r from-green-200 via-blue-200 to-purple-200"
                        : "text-body-color hover:bg-primary hover:bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 dark:text-dark-6 dark:hover:text-white"
                    }`}
                  >
                    Generative AI assistant
                  </a>
                  <a
                    onClick={() => handleTabOpen("company")}
                    className={`cursor-pointer rounded-full px-4 bg-gray-100 py-3 text-sm font-medium md:text-base lg:px-6 ${
                      open === "company"
                        ? "px-4 py-2 text-black rounded-full bg-gradient-to-r from-green-200 via-blue-200 to-purple-200"
                        : "text-body-color hover:bg-primary hover:bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 dark:text-dark-6 dark:hover:text-white"
                    }`}
                  >
                     AI infrastructure
                  </a>
                </div>
                <TabContent
                  details=" CuviSoft Bedrock is a fully managed service offering a choice of high-performing FMs from leading AI companies and CuviSoft through a unified API, along with a broad set of capabilities to build and scale generative AI applications. As a serverless service, CuviSoft Bedrock requires no infrastructure management while allowing secure integration and deployment using familiar CuviSoft services.
                  CuviSoft Bedrock is a fully managed service offering a choice of high-performing FMs from leading AI companies and CuviSoft through a unified API, along with a broad set of capabilities to build and scale generative AI applications. As a serverless service, CuviSoft Bedrock requires no infrastructure management while allowing secure integration and deployment using familiar CuviSoft services.
                  CuviSoft Bedrock is a fully managed service offering a choice of high-performing FMs from leading AI companies and CuviSoft through a unified API, along with a broad set of capabilities to build and scale generative AI applications. As a serverless service, CuviSoft Bedrock requires no infrastructure management while allowing secure integration and deployment using familiar CuviSoft services.
                  CuviSoft Bedrock is a fully managed service offering a choice of high-performing FMs from leading AI companies and CuviSoft through a unified API, along with a broad set of capabilities to build and scale generative AI applications. As a serverless service, CuviSoft Bedrock requires no infrastructure management while allowing secure integration and deployment using familiar CuviSoft services."
                  tabCategory="home"
                  contentImage="https://d1.awsstatic.com/homepage/vibrant-geometrical-shapes-4x3.090a954e94a7e257f56885cd1311beddf228b2dd.jpg"
                  open={open}
                />
                <TabContent
                  details=" The rapid growth of generative AI brings promising new innovation and, at the same time, raises new challenges. At CuviSoft, we are committed to responsibly developing AI, taking a people-centric approach that prioritizes education, science, and our customers. Integrate responsible AI across the complete AI lifecycle with services and tools like Guardrails for CuviSoft Bedrock, CuviSoft SageMaker Clarify, CuviSoft AI service cards, and many more.
                  The rapid growth of generative AI brings promising new innovation and, at the same time, raises new challenges. At CuviSoft, we are committed to responsibly developing AI, taking a people-centric approach that prioritizes education, science, and our customers. Integrate responsible AI across the complete AI lifecycle with services and tools like Guardrails for CuviSoft Bedrock, CuviSoft SageMaker Clarify, CuviSoft AI service cards, and many more.
                  The rapid growth of generative AI brings promising new innovation and, at the same time, raises new challenges. At CuviSoft, we are committed to responsibly developing AI, taking a people-centric approach that prioritizes education, science, and our customers. Integrate responsible AI across the complete AI lifecycle with services and tools like Guardrails for CuviSoft Bedrock, CuviSoft SageMaker Clarify, CuviSoft AI service cards, and many more. "
                  tabCategory="about"
                  contentImage="https://d1.awsstatic.com/Bedrock-rag-media.1918fef6265cc5a80716aecff9553c62bf46ad9b.jpg"
                  open={open}
                />
                <TabContent
                  details="CuviSoft Q also makes it easier for employees to get answers to questions across business data—such as company policies, product information, business results, code base, employees, and many other topics. CuviSoft Q connects to enterprise data repositories to logically summarize the data, analyze trends, and engage in dialogue about the data.
                  CuviSoft Q also makes it easier for employees to get answers to questions across business data—such as company policies, product information, business results, code base, employees, and many other topics. CuviSoft Q connects to enterprise data repositories to logically summarize the data, analyze trends, and engage in dialogue about the data.
                  CuviSoft Q also makes it easier for employees to get answers to questions across business data—such as company policies, product information, business results, code base, employees, and many other topics. CuviSoft Q connects to enterprise data repositories to logically summarize the data, analyze trends, and engage in dialogue about the data.
                  CuviSoft Q also makes it easier for employees to get answers to questions across business data—such as company policies, product information, business results, code base, employees, and many other topics. CuviSoft Q connects to enterprise data repositories to logically summarize the data, analyze trends, and engage in dialogue about the data.

                  "
                  tabCategory="team"
                  contentImage="https://d1.awsstatic.com/CuviSoft-q-business.00a46f08d417e339a6a84cc4facc06c12f4f4490.png"
                  open={open}
                />
                <TabContent
                  details="As generative AI models become more prevalent, the usage, management, and costs of compute, storage, and networking resources increase. Selecting the right infrastructure is essential to optimize performance, minimize costs, reduce power consumption, and streamline model training and deployment. Power your AI with the broadest set of secure and price-performant cloud tools and AI infrastructure, including fully managed services, accelerated computing instances, storage, orchestration and clustering services, and networking. Get the price-to-performance you need while ensuring your generative AI models are as energy efficient as possible. CuviSoft purpose-built AI silicon, including CuviSoft Trainium and CuviSoft Inferentia, is designed to speed up and lower the cost of training and deploying your model into production.
                  As generative AI models become more prevalent, the usage, management, and costs of compute, storage, and networking resources increase. Selecting the right infrastructure is essential to optimize performance, minimize costs, reduce power consumption, and streamline model training and deployment. Power your AI with the broadest set of secure and price-performant cloud tools and AI infrastructure, including fully managed services, accelerated computing instances, storage, orchestration and clustering services, and networking. Get the price-to-performance you need while ensuring your generative AI models are as energy efficient as possible. CuviSoft purpose-built AI silicon, including CuviSoft Trainium and CuviSoft Inferentia, is designed to speed up and lower the cost of training and deploying your model into production.
                  "
                  tabCategory="company"
                  contentImage="https://d1.awsstatic.com/homepage/vibrant-computer-chip-4x3.5e8cf227af913ef053e02ed2f952a96f4d39ff12.jpg"
                  open={open}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabAi;
