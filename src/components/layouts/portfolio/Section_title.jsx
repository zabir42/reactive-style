import style from "./Section_title.module.css";

const Section_title = ({title, desc}) => {
    return (
      <div className={style.section_title}>
        <section>
          <h4>{title}</h4>

          <p>{desc}</p>
        </section>
      </div>
    );
};

export default Section_title;