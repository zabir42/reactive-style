import style from "./Header.module.css";

const Header = ({ logo, items }) => {
  const itemArr = items.map((item) => <li>
    <a href="">{item}</a>
  </li>);
  return (
    <header>
      <nav className={style.header}>
        <div className={style.nav_logo}>
          <div>
            <h4>{logo}</h4>
          </div>
        </div>
        <div className={style.nav_item}>
          <ul>
            {itemArr}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
