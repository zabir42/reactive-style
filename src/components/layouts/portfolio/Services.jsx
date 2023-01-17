import style from './Services.module.css';

const Services = ({title, desc}) => {
  return (
    <section>
      
          <div className={style.services}>
            <div className={style.service_item}>
              <h4>{title}</h4>
              <p>
               {desc}
              </p>
            </div>
          </div>
    </section>
  );
};


export default Services