import style from './Footer.module.css';

const Footer = ({text}) => {
    return (
      <div>
        <footer className={style.footer}>
          <p>{text}</p>
        </footer>
      </div>
    );
}

export default Footer