import style from "./Services.module.css";

const Services = ({ title, desc }) => {
  return (
    <div className={style.service_item}>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Services;
