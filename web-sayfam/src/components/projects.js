import { useContext } from "react";

import { DataContext } from "../context/DataContext";
import ProjectCard from "./projectCard";

const Projects = () => {
  const mydata = useContext(DataContext);
  const project = mydata.data.projects;
  return (
    <div className="bg-my-green font-inter dark:bg-my-darkgreen flex justify-center">
      <div className="w-9/12">
        <h3 className="text-my-purple dark:text-my-green font-bold text-5xl sm:text-left mt-16 mb-8">
          {mydata.data.project}
        </h3>
        {project.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
