import twitter from "../images/twitter 1.svg";
import codepen from "../images/codepen 1.svg";
import atsign from "../images/at-sign 1.svg";
import instagram from "../images/instagram 1.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center my-5">
      <div className="w-1/3 flex  flex-col gap-6">
        <h3 className="text-my-purple text-5xl font-bold">
          Send me a message!
        </h3>
        <p className="text-2xl mb-0">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <a
          className="text-my-purple text-xl font-medium"
          href="https://www.gmail.com"
        >
          almilasucode@gmail.com
        </a>
        <div className="flex justify-center gap-6">
          <a href="https://twitter.com">
            <img src={twitter} />
          </a>
          <a href="https://codepen.io/">
            <img src={codepen} />
          </a>
          <a href="">
            <img src={atsign} />
          </a>
          <a
            href="https://www.instagram.com
"
          >
            <img src={instagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
