import Section_title from './Section_title';
import style from './Services.module.css';

const Services = () => {
  return (
    <section>
      <div>
        <div>
          <Section_title
            text="our services"
            desc="Labore veniam aute amet nisi laboris quis anim laboris ad non veniam. Et excepteur amet aliqua ut. Consectetur proident amet occaecat Lorem velit duis Lorem."
          />
        </div>
        <div>
          <div className={style.services}>
            <div className={style.service_item}>
              <h4>graphics design</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={style.service_item}>
              <h4>web design</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={style.service_item}>
              <h4>web devlopement</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={style.service_item}>
              <h4>app devlopement</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={style.service_item}>
              <h4>cloud services</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={style.service_item}>
              <h4>domain service</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={style.service_item}>
              <h4>database management</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={style.service_item}>
              <h4>24/7 services</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Services