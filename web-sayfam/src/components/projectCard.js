import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ProjectCard = ({ project }) => {
  //const mydata = useContext(DataContext);
  const photo = project.image;
  return (
    <div className=" dark:!bg-my-black font-inter bg-white rounded-xl mb-8 gap-4 shadow-lg sm:flex-nowrap">
      <div className="flex flex-wrap lg:flex-nowrap justify-between dark:bg-my-black rounded-xl">
        <img
          className="sm:size-[22.5rem]  object-cover rounded-t-xl sm:rounded-l-xl"
          src={require("../images/" + `${photo}`)}
        />
        <div className="flex text-pretty text-left dark:bg-my-black">
          <div className="px-8 flex justify-center grow flex-col gap-6 dark:bg-my-black">
            <h4 className="text-my-purple font-bold text-3xl font-inter mb-0">
              {project.projname}
            </h4>
            <p className="mb-0 max-w-[22.5rem] xl:max-w-2xl dark:text-white">
              {project.explaination}
            </p>
            <div className="flex text-center justify-start">
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
