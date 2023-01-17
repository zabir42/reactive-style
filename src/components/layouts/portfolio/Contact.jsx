import style from './Contact.module.css';

const Contact = () => {
    return (
      <section>
        <div>
          <div className={style.contact}>
            <div className={style.contact_right}>
              <form>
                <input type="text" placeholder="Full Name"></input>
                <input type="text" placeholder="Nickname"></input>
                <input type="email" placeholder="Email"></input>
                <textarea placeholder="Message"></textarea>
                <button>send message</button>
              </form>
            </div>
            <div className={style.contact_map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30594721175!2d-74.25986633003555!3d40.6971494172771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1673619663877!5m2!1sen!2sbd"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact