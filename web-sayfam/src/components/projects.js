import { useContext } from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import { DataContext } from "../context/DataContext";

const Projects = () => {
  const mydata = useContext(DataContext);
  const photo = mydata.data.projects[0].image;
  return (
    <div className="bg-my-green flex justify-center">
      <div className="w-9/12">
        <h3 className="text-my-purple font-bold text-5xl text-left mt-16 mb-8">
          Projects
        </h3>
        <div className="flex bg-white rounded-xl mb-8 gap-4 shadow-lg">
          <img
            className="size-[22.5rem]  object-cover rounded-l-xl"
            src={require("../images/" + `${photo}`)}
          />
          <div className="flex text-left">
            <div className="px-8 flex justify-center flex-col gap-6">
              <h4 className="text-my-purple font-bold text-3xl font-inter mb-0">
                Workintech
              </h4>
              <p className="mb-0">{mydata.data.projects[0].explaination}</p>
              <div className="flex text-center">
                <p className="bg-my-purple rounded-2xl w-20 h-8 pt-1 font-medium text-white mr-2 mb-0">
                  react
                </p>
                <p className="bg-my-purple rounded-2xl w-20 pt-1 text-white font-medium mr-2 mb-0">
                  redux
                </p>{" "}
                <p className="bg-my-purple rounded-2xl w-20 pt-1 text-white font-medium mr-2 mb-0">
                  vercel
                </p>
              </div>
              <div>
                <a
                  href=""
                  className="text-black font-medium underline-offset-4 mr-4"
                >
                  View Site
                </a>
                <a
                  href=""
                  className="text-black font-medium underline-offset-4"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
