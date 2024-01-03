import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ProjectCard = ({ project }) => {
  //const mydata = useContext(DataContext);
  const photo = project.image;
  return (
    <div className=" dark:!bg-my-black bg-white rounded-xl mb-8 gap-4 shadow-lg">
      <div className="flex flex-wrap dark:bg-my-black rounded-xl">
        <img
          className="size-[22.5rem]  object-cover rounded-l-xl"
          src={require("../images/" + `${photo}`)}
        />
        <div className="flex text-left dark:bg-my-black">
          <div className="px-8 flex justify-center grow flex-col gap-6 dark:bg-my-black">
            <h4 className="text-my-purple font-bold text-3xl font-inter mb-0">
              {project.projname}
            </h4>
            <p className="mb-0 max-w-2xl dark:text-white">
              {project.explaination}
            </p>
            <div className="flex text-center">
              <p className="bg-my-purple rounded-2xl w-20 h-8 pt-1 font-medium text-white mr-2 mb-0">
                {project.lib1}
              </p>
              <p className="bg-my-purple rounded-2xl w-20 pt-1 text-white font-medium mr-2 mb-0">
                {project.lib2}
              </p>{" "}
              <p className="bg-my-purple rounded-2xl w-20 pt-1 text-white font-medium mr-2 mb-0">
                {project.lib3}
              </p>
            </div>
            <div className="text-black dark:!text-my-green">
              <a
                href={project.href}
                className=" dark:!text-my-green font-medium underline-offset-4 mr-4"
              >
                View Site
              </a>
              <a
                href={project.github}
                className="dark:text-my-green font-medium underline-offset-4"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
