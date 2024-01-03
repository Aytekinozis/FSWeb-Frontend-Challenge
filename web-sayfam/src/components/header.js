import React, { useContext, useEffect, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { DataContext } from "../context/DataContext";

const Header = () => {
  const [check, setCheck] = useState(false);
  const [darkMode, setDarkMode] = useState("light");
  const mydata = useContext(DataContext);
  //const {toggleLanguage}

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

  const languageHandler = () => {
    mydata.toggleLanguage();
  };

  useEffect(() => {
    htmlDarkModeSetter();
    //console.log(mydata);
  }, []);
  return (
    <div className="flex justify-center bg-my-purple dark:bg-my-darkpurple min-h-24">
      <div className="flex w-9/12 justify-between">
        <div className="bg-my-green dark:bg-my-darkgreen absolute top-0 right-0 min-h-24 w-3/12 flex"></div>
        <div className="">
          <h2 className="text-my-green text-4xl text-left mt-5">
            {mydata.data.header.name}
          </h2>
        </div>
        <div className="sticky flex items-baseline mt-3">
          <button
            onClick={languageHandler}
            className="mr-20 text-my-green font-bold align-top"
          >
            {mydata.data.header.switchtoturkish}
          </button>
          <Form className="mr-4">
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
    </div>
  );
};

export default Header;
