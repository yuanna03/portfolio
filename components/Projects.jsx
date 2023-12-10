<<<<<<< HEAD
import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "University Food Order System",
        description: "Currently Blank",
        image: "/projects/FoodOrdering.png",
        gitUrl: "=="

    },
    {
        id: 2,
        title: "APU Programming Cafe",
        description: "Currently Blank",
        image: "/projects/ProgrammingCafe.png",
        gitUrl: "=="
    }

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

=======
import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "University Food Order System",
        description: "Currently Blank",
        image: "/projects/FoodOrdering.png",
        gitUrl: "=="

    },
    {
        id: 2,
        title: "APU Programming Cafe",
        description: "Currently Blank",
        image: "/projects/ProgrammingCafe.png",
        gitUrl: "=="
    }

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

>>>>>>> bd6b8b5a2e9f1ed020626a07e215639db395c947
export default Projects;