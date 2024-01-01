import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const Header = () => {
  const [check, setCheck] = useState(false);
  const [darkMode, setDarkMode] = useState("light");

  const htmlDarkModeSetter = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setCheck(darkMode === "light" ? true : false);
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleDarkMode = () => {
    const inverseMode = darkMode === "light" ? "dark" : "light";
    localStorage.setItem("theme", inverseMode);
    setDarkMode(inverseMode);
    htmlDarkModeSetter();
    setCheck(darkMode === "light" ? true : false);
  };

  useEffect(() => {
    htmlDarkModeSetter();
  }, []);
  return (
    <div className="flex justify-around bg-my-purple dark:bg-my-darkpurple min-h-24">
      <div className="bg-my-green dark:bg-my-darkgreen absolute top-0 right-0 min-h-24 w-3/12 flex"></div>
      <div className="">
        <h2 className="text-my-green text-4xl text-left mt-5">almilla</h2>
      </div>
      <div className="sticky flex items-baseline mt-3">
        <button className="mr-8 text-my-green font-bold align-top">
          Turkceye Gec
        </button>
        <Form>
          <FormGroup switch>
            <Input
              type="switch"
              role="switch"
              checked={check}
              onClick={toggleDarkMode}
            />
            <Label className="text-my-purple font-bold dark:text-white">
              Dark Mode
            </Label>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Header;
