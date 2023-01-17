import React from "react";
import Services from "../layouts/portfolio/Services";
import style from "../layouts/portfolio/Services.module.css";

export const useServices = (props) => {
  return (
    <div className={style.services}>
      {props.map((item) => (
        <Services title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};
