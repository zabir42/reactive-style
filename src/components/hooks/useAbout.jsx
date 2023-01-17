import React from "react";
import About from "../layouts/portfolio/About";
import style from "../layouts/portfolio/About.module.css";
export const useAbout = (props) => {
  return (
    <div className={style.dreams}>
      {props.map((item) => (
        <About title={item.title} desc={item.desc} btn_title={item.btn_title} />
      ))}
    </div>
  );
};
