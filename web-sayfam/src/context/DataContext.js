import { createContext, useContext, useEffect, useState } from "react";
import dataEn from "../data/dataEN";
import dataTr from "../data/dataTR";
import axios from "axios";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const [data, setData] = useState(lang === "en" ? dataEn : dataTr);
  const toggleLanguage = () => {
    const language = lang === "en" ? "tr" : "en";
    localStorage.setItem("lang", language);
    setLang(language);
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
    localStorage.setItem("lang", "en");
    //setData(lang === "en" ? dataEn : dataTr);
    //console.log(data);
    postData(data);
  }, []);
  useEffect(() => {
    //localStorage.setItem("lang", "en");
    lang === "en" ? postData(dataEn) : postData(dataTr);
    console.log(data);
  }, [lang]);

  return (
    <DataContext.Provider value={{ data, toggleLanguage }}>
      {children}
    </DataContext.Provider>
  );
};
