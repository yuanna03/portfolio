<<<<<<< HEAD
import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from 'next/image';

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Java</li>
                <li>C#</li>
                <li>SQL</li>
                <li>R</li>
                <li>Python</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>QR Seek</li>
            <li>ERASMUS+ IACD</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
                <li>Catholic High School</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                <Image
        src="/AboutMe.png"
        alt="About Me"
        width={450}
        height={450}
        style={{ borderRadius: "25px" }}
    />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">I am currently pursuing a degree in Computer Science specializing in Artificial Intelligence at APU.
                    I have great programming skills in Python, Java, C#, SQL, and R. My knowledge of these languages enables me to function in a variety of technical environments. I'm skilled at harnessing the flexibility of Python, the reliability of Java, the efficiency of C#, the database management skills of SQL, and the statistical computing power of R to create effective and creative solutions. My proficiency with these programming languages allows me to take on challenging issues and make valuable contributions to a range of projects. </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
=======
import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Java</li>
                <li>C#</li>
                <li>SQL</li>
                <li>R</li>
                <li>Python</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>QR Seek</li>
            <li>ERASMUS+ IACD</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
                <li>Catholic High School</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">I am currently pursuing a degree in Computer Science specializing in Artificial Intelligence at APU.
                    I have great programming skills in Python, Java, C#, SQL, and R. My knowledge of these languages enables me to function in a variety of technical environments. I'm skilled at harnessing the flexibility of Python, the reliability of Java, the efficiency of C#, the database management skills of SQL, and the statistical computing power of R to create effective and creative solutions. My proficiency with these programming languages allows me to take on challenging issues and make valuable contributions to a range of projects. </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
>>>>>>> bd6b8b5a2e9f1ed020626a07e215639db395c947
export default AboutMe;