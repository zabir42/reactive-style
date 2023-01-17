import React from "react";
import Address from "../layouts/portfolio/Address";
import style from '../layouts/portfolio/Address.module.css';

export const useAddress = (props) => {
  return (
    <div className={style.address}>
      {props.map((item) => (
        <Address
          address={item.address}
          add_info={item.add_info}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
