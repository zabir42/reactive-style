import style from './About.module.css';
import Section_title from "./Section_title";

const About = () => {
  return (
    <section>
      <div>
        <div>
          <Section_title
            text="about us"
            desc="Labore veniam aute amet nisi laboris quis anim laboris ad non veniam. Et excepteur amet aliqua ut. Consectetur proident amet occaecat Lorem velit duis Lorem."
          />
        </div>
        <div>
          <div>
            <div className={style.dreams}>
              <div className={style.dream_item}>
                <h4>our mission</h4>
                <p>
                  Laborum reprehenderit do quis dolore est aute quis anim elit
                  nostrud. Pariatur pariatur voluptate minim duis ex occaecat
                  est fugiat. Tempor enim irure amet anim commodo.
                </p>
                <a href="">read more</a>
              </div>
              <div className={style.dream_item}>
                <h4>our vision</h4>
                <p>
                  Laborum reprehenderit do quis dolore est aute quis anim elit
                  nostrud. Pariatur pariatur voluptate minim duis ex occaecat
                  est fugiat. Tempor enim irure amet anim commodo.
                </p>
                <a href="">read more</a>
              </div>
              <div className={style.dream_item}>
                <h4>our history</h4>
                <p>
                  Laborum reprehenderit do quis dolore est aute quis anim elit
                  nostrud. Pariatur pariatur voluptate minim duis ex occaecat
                  est fugiat. Tempor enim irure amet anim commodo.
                </p>
                <a href="">read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
