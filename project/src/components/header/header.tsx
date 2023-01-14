import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Header (): JSX.Element {
  return (
    <header className="header">
      <div className="container container--size-l">
        <Link to={AppRoute.Main} className="logo header__logo" aria-label="Перейти на Главную">
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link to={AppRoute.Main} className="link">Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.Contacts} className="link">Контакты</Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.MyReservations} className="link">Мои бронирования</Link>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <a className="btn btn--accent header__side-item" href="#/">Выйти</a>
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
