import style from "../portfolio/Address.module.css";

const Address = ({ address, add_info, icon }) => {
  return (
    <div className={style.address_item}>
      <i>{icon}</i>
      <h4>
        {address} <span>{add_info}</span>
      </h4>
    </div>
  );
};

export default Address;
