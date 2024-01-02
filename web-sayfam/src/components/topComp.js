import { useContext } from "react";
import photo from "../images/b04fd1fa29a883e2f4b8b8577a5c82eb.png";
import { DataContext } from "../context/DataContext";

const TopComp = () => {
  const mydata = useContext(DataContext);
  return (
    <div className="bg-my-purple dark:bg-my-darkpurple min-h-168 justify-center flex static left-0">
      <div className="bg-my-green dark:bg-my-darkgreen absolute top-auto right-0 min-h-168 w-3/12 flex"></div>
      <div className="flex flex-wrap absolute justify-between w-9/12 h-96 top-36">
        <div className="flex space-between flex-col justify-evenly">
          <h1 className="text-my-green text-6xl text-left w-136">
            {mydata.data.topcomp.frontend}
          </h1>
          <p className="text-white text-left w-136">
            {mydata.data.topcomp.explaination}
          </p>
          <div className="flex">
            <button className="bg-white hover:bg-my-green rounded-md w-28 h-10 mr-3">
              GitHub
            </button>
            <a
              href="https://www.google.com"
              className=" btn btn-light dark:btn-ghost"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
              </svg>
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
