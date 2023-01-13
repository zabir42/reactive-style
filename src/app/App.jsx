import classes from "../App.module.css";
import background from "../assets/img/img6.jpg";

const App = () => {
  return (
    <div>
      <div className={classes.position}>
        <header className={classes.header}>
          <div className={classes.nav_logo}>
            <h3>reactive style</h3>
          </div>
          <div className={classes.nav_menu}>
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">about</a>
              </li>
              <li>
                <a href="">services</a>
              </li>
              <li>
                <a href="">portfolio</a>
              </li>
              <li>
                <a href="">blog</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </div>
        </header>
      </div>

      <div
        className={classes.banner_img}
        style={{
          backgroundImage: `url(${background})`,
          height: "300px",
        }}
      >
        <div className={classes.banner_content}>
          <h4>welcome to our world</h4>
          <p>
            Pariatur pariatur commodo do elit. Eiusmod tempor sit id enim
            laboris quis in adipisicing incididunt eiusmod fugiat tempor laborum
            consequat. Magna velit et cillum laboris. Cillum amet mollit
            proident do consectetur cupidatat mollit tempor enim occaecat.
            Occaecat excepteur nisi proident consequat elit laborum culpa. Enim
            ullamco est ut enim sint nostrud adipisicing ipsum culpa eu magna
            proident.
          </p>
          <div className={classes.banner_btn}>
            <a
              href=""
              className={classes.btn}
              style={{
                backgroundColor: "tomato",
                transition: ".3s",
              }}
            >
              contact us{" "}
            </a>
            <a
              href=""
              className={classes.btn}
              style={{
                border: "2px solid tomato",
                padding: "8px 20px",
              }}
            >
              our portfolio{" "}
            </a>
          </div>
        </div>
      </div>

      <div className={classes.main}>
        <section className={classes.section}>
          <h4 className={classes.section_title}>about us</h4>

          <p>
            Labore veniam aute amet nisi laboris quis anim laboris ad non
            veniam. Et excepteur amet aliqua ut. Consectetur proident amet
            occaecat Lorem velit duis Lorem. Pariatur laboris sunt eu Lorem
            ullamco reprehenderit. In ex amet ex duis veniam nostrud proident
            sint do sit. Fugiat irure incididunt ut do velit cillum sit laborum
            sit aliqua eiusmod quis quis. Laboris magna magna aliqua adipisicing
            dolore irure nulla.
          </p>
        </section>

        <section>
          <div className={classes.dream}>
            <div>
              <h4>our mission</h4>
              <p>
                Laborum reprehenderit do quis dolore est aute quis anim elit
                nostrud. Pariatur pariatur voluptate minim duis ex occaecat est
                fugiat. Tempor enim irure amet anim commodo.
              </p>
              <a href="">read more</a>
            </div>
            <div>
              <h4>our vision</h4>
              <p>
                Laborum reprehenderit do quis dolore est aute quis anim elit
                nostrud. Pariatur pariatur voluptate minim duis ex occaecat est
                fugiat. Tempor enim irure amet anim commodo.
              </p>
              <a href="">read more</a>
            </div>
            <div>
              <h4>our history</h4>
              <p>
                Laborum reprehenderit do quis dolore est aute quis anim elit
                nostrud. Pariatur pariatur voluptate minim duis ex occaecat est
                fugiat. Tempor enim irure amet anim commodo.
              </p>
              <a href="">read more</a>
            </div>
          </div>
        </section>
      </div>

      <div className={classes.main}>
        <section className={classes.section}>
          <h4 className={classes.section_title}>our services</h4>

          <p>
            Labore veniam aute amet nisi laboris quis anim laboris ad non
            veniam. Et excepteur amet aliqua ut. Consectetur proident amet
            occaecat Lorem velit duis Lorem.
          </p>
        </section>

        <section>
          <div className={classes.service}>
            <div className={classes.service_item}>
              <h4>graphics design</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={classes.service_item}>
              <h4>web design</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={classes.service_item}>
              <h4>web devlopement</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={classes.service_item}>
              <h4>app devlopement</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={classes.service_item}>
              <h4>cloud services</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={classes.service_item}>
              <h4>domain service</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={classes.service_item}>
              <h4>database management</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
            <div className={classes.service_item}>
              <h4>24/7 services</h4>
              <p>
                Incididunt fugiat ex minim reprehenderit cillum. Non enim labore
                labore cillum mollit sint fugiat aliqua ut tempor aliquip.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className={classes.main}>
        <section className={classes.section}>
          <div>
            <h4 className={classes.section_title}>contact us</h4>
            <p>
              Ullamco consectetur adipisicing amet officia ipsum est proident ad
              cupidatat deserunt dolore in aute dolore. Labore irure id magna
              elit non duis elit consectetur Lorem exercitation nisi consectetur
              cupidatat..
            </p>
          </div>
        </section>

        <section>
          <div className={classes.address}>
            <div className={classes.address_item}>
              <h4>
                address <span>newyork, usa</span>
              </h4>
            </div>

            <div className={classes.address_item}>
              <h4>
                email <span>info@email.com</span>
              </h4>
            </div>

            <div className={classes.address_item}>
              <h4>
                phone <span>01781079305</span>
              </h4>
            </div>
          </div>
        </section>
      </div>

      <div className={classes.main}>
        <section>
          <div className={classes.contact}>
            <div className={classes.contact_right}>
              <form>
                <input type="text" placeholder="Full Name"></input>
                <input type="text" placeholder="Nickname"></input>
                <input type="email" placeholder="Email"></input>
                <textarea placeholder="Message"></textarea>
                <button>send message</button>
              </form>
            </div>
            <div className={classes.contact_map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30594721175!2d-74.25986633003555!3d40.6971494172771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1673619663877!5m2!1sen!2sbd"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      <div>
        <footer className={classes.footer}>
          &copy; 2023 all rights reserved
        </footer>
      </div>
    </div>
  );
};

export default App;
