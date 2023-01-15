import style from './Address.module.css';
import Section_title from './Section_title';

const Address = () => {
    return (
      <section>
        <div>
          <div>
            <Section_title
              text="contact us"
              desc="Labore veniam aute amet nisi laboris quis anim laboris ad non veniam. Et excepteur amet aliqua ut. Consectetur proident amet occaecat Lorem velit duis Lorem."
            />
          </div>
          <div>
            <div className={style.address}>
              <div className={style.address_item}>
                <h4>
                  address <span>newyork, usa</span>
                </h4>
              </div>

              <div className={style.address_item}>
                <h4>
                  email <span>info@email.com</span>
                </h4>
              </div>

              <div className={style.address_item}>
                <h4>
                  phone <span>01781079305</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Address

