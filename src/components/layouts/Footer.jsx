import style from './Footer.module.css';

const Footer = ({text}) => {
    return (
      <div>
        <footer className={style.footer}>
          {text}
        </footer>
      </div>
    );
}

export default Footer