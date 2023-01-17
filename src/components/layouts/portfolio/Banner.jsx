import style from "./Banner.module.css";

const Banner = ({title, desc}) => {
  return (
    <div className={style.banner_img}>
      <div className={style.banner_content}>
        <h4>{title}</h4>
        <p>
          {desc}
        </p>
        <div className={style.button}>
          <a href="" className={`${style.btn} ${style.box_btn}`}>
            contact us
          </a>
          <a href="" className={`${style.btn} ${style.border_btn}`}>
            our portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
