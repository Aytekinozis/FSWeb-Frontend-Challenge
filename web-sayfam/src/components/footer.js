import twitter from "../images/twitter 1.svg";
import codepen from "../images/codepen 1.svg";
import atsign from "../images/at-sign 1.svg";
import instagram from "../images/instagram 1.svg";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Footer = () => {
  const mydata = useContext(DataContext);
  return (
    <div className="flex flex-col text-center font-inter items-center justify-center py-5 dark:bg-my-black">
      <div className="w-1/3 flex  flex-col gap-6">
        <h3 className="text-my-purple text-5xl font-bold">
          {mydata.data.footer.message}
        </h3>
        <p className="text-2xl mb-0 dark:text-white">
          {mydata.data.footer.note}
        </p>
        <a
          className="text-my-purple text-xl font-medium"
          href="mailto:aytekinozis93@gmail.com"
        >
          {mydata.data.footer.mail}
        </a>
        <div className="flex justify-center gap-6">
          <a href="https://twitter.com/aytekings">
            <img src={twitter} />
          </a>
          <a href="https://codepen.io/">
            <img src={codepen} />
          </a>
          <a href="mailto:aytekinozis93@gmail.com">
            <img src={atsign} />
          </a>
          <a href="https://www.instagram.com/aytekings/">
            <img src={instagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
