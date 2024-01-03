import jsimg from "../images/js-logo 1.png";
import reactimg from "../images/Rectangle 35@2x.png";
import reduximg from "../images/Rectangle 34.png";
import nodeimg from "../images/node-logo 1.png";
import vscodeimg from "../images/vscode.png";
import figmaimg from "../images/figma-logo 1.png";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Skills = () => {
  const mydata = useContext(DataContext);
  return (
    <div className="flex justify-center dark:bg-my-black">
      <div className="flex justify-between w-9/12 pt-20 pb-10 flex-wrap">
        <h3 className="text-my-purple dark:text-my-green font-bold text-5xl">
          {mydata.data.skills.skills}
        </h3>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img alt="js" className=" mb-10 mr-8 shadow-lg" src={jsimg} />
            <p className="text-slate-400 dark:text-white text-2xl sh">
              JAVACSRIPT
            </p>
          </div>
          <div className="flex items-center">
            <img alt="react" className=" mb-10 mr-8 shadow-lg" src={reactimg} />
            <p className="text-slate-400 dark:text-white text-2xl">REACT</p>
          </div>
          <div className="flex items-center">
            <img
              alt="redux"
              className="size-[7.5rem] rounded mb-10 mr-8 shadow-lg"
              src={reduximg}
            />
            <p className="text-slate-400 dark:text-white text-2xl">REDUX</p>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <img alt="node" className=" mb-10 mr-8 shadow-lg" src={nodeimg} />
            <p className="text-slate-400 dark:text-white text-2xl">NODE</p>
          </div>
          <div className="flex items-center">
            <img
              alt="vscode"
              className="size-[7.5rem] rounded mb-10 mr-8 shadow-lg"
              src={vscodeimg}
            />
            <p className="text-slate-400 dark:text-white text-2xl">VS CODE</p>
          </div>
          <div className="flex items-center">
            <img alt="figma" className=" mb-10 mr-8 shadow-lg" src={figmaimg} />
            <p className="text-slate-400 dark:text-white text-2xl">FIGMA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
