import { useContext } from "react";
import photo from "../images/b04fd1fa29a883e2f4b8b8577a5c82eb.png";
import { DataContext } from "../context/DataContext";

const TopComp = () => {
  const mydata = useContext(DataContext);
  return (
    <div className="bg-my-purple  font-inter dark:bg-my-darkpurple min-h-200 sm:min-h-152 justify-center flex static left-0">
      <div className="bg-my-green dark:bg-my-darkgreen absolute top-auto right-0 sm:min-h-152 w-3/12 flex"></div>
      <div className="flex flex-wrap gap-3 sm:gap-0 absolute justify-center sm:justify-between w-9/12 sm:h-96 top-36">
        <div className="flex space-between gap-3 sm:gap-0 flex-col sm:justify-evenly">
          <h1 className="text-my-green text-6xl sm:text-left max-w-136">
            {mydata.data.topcomp.frontend}
          </h1>
          <p className="text-white sm:text-left max-w-136">
            {mydata.data.topcomp.explaination}
          </p>
          <div className="flex justify-center sm:justify-start gap-4 text-center">
            <a
              href="https://github.com/Aytekinozis"
              className="btn btn-light pt-2 px-4"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aytekin-öziş-0a854946/"
              className=" btn btn-light pt-2 px-4"
              role="button"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <img
          alt="anafoto"
          className="size-96 rounded-lg object-cover shadow-lg"
          src={photo}
        ></img>
      </div>
    </div>
  );
};

export default TopComp;
