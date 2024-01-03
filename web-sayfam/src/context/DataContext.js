import { createContext, useContext, useEffect, useState } from "react";
import dataEn from "../data/dataEN";
import dataTr from "../data/dataTR";
import axios from "axios";

export const DataContext = createContext();

const language = () => {
  if (JSON.parse(localStorage.getItem("lang"))) {
    return JSON.parse(localStorage.getItem("lang"));
  } else {
    return "en";
  }
};

export const DataContextProvider = ({ children }) => {
  const [lang, setLang] = useState(language());

  const [data, setData] = useState(lang === "en" ? dataEn : dataTr);

  const toggleLanguage = () => {
    const language = lang === "en" ? "tr" : "en";
    localStorage.setItem("lang", JSON.stringify(language));
    setLang(language);
    const langdata = JSON.parse(localStorage.getItem("lang"));
    console.log(localStorage.getItem("lang"));
  };

  const postData = (data) => {
    axios
      .post("https://reqres.in/api/workintech", data)
      .then((res) => {
        setData(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log("sunucu hatası : ", err);
      });
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("lang")) === "tr") {
      localStorage.setItem("lang", JSON.stringify("tr"));
      setData(dataTr);
      postData(dataTr);
      console.log("if calisti");
    } else {
      postData(data);
    }

    //console.log(data);
  }, []);
  useEffect(() => {
    lang === "en" ? postData(dataEn) : postData(dataTr);
    //console.log(data);
  }, [lang]);

  return (
    <DataContext.Provider value={{ data, toggleLanguage }}>
      {children}
    </DataContext.Provider>
  );
};
