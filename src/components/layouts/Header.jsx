import style from './Header.module.css';

const Header = () => {
    return (
      <header>
        <nav className={style.header}>
          <div className={style.nav_logo}>
            <div>
              <h4>reactive style</h4>
            </div>
          </div>
          <div className={style.nav_item}>
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
        </nav>
      </header>
    );
}

export default Header