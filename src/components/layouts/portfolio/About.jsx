import style from "./About.module.css";
const About = ({title, desc, btn_title}) => {
  const Dream = (
    <div className={style.dream_item}>
      <h4>{title}</h4>
      <p>{desc}</p>
      <a href="">{btn_title}</a>
    </div>
  );
 
  return (
    <section>
      <div>
        <div>
          <div className={style.dreams}>
            {Dream}
            {Dream}
            {Dream}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
