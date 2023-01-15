import style from "./Banner.module.css";


const Banner = () => {
  return (
    <div className={style.banner_img}>
      <div className={style.banner_content}>
        <h4>welcome to our world</h4>
        <p>
          Pariatur pariatur commodo do elit. Eiusmod tempor sit id enim laboris
          quis in adipisicing incididunt eiusmod fugiat tempor laborum
          consequat. Magna velit et cillum laboris. Cillum amet mollit proident
          do consectetur cupidatat mollit tempor enim occaecat. Occaecat
          excepteur nisi proident consequat elit laborum culpa. Enim ullamco est
          ut enim sint nostrud adipisicing ipsum culpa eu magna proident.
        </p>
        <div className={style.banner_btn}>
          <a href="">contact us </a>
          <a href="">our portfolio </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
