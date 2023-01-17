import style from '../portfolio/About.module.css';
const About = ({ title, desc, btn_title }) => {

  return (
    
      <div className={style.dream_item}>
        <h4>{title}</h4>
        <p>{desc}</p>
        <a href="">{btn_title}</a>
      </div>
  );
};

export default About;
