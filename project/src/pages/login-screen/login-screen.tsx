import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus, AppRoute } from '../../const';
import { Navigate } from 'react-router-dom';
import { useRef } from 'react';
import { AuthData } from '../../types/user-data';
import { loginAction } from '../../store/api-actions';
import { FormEvent} from 'react';

function LoginScreen (): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const userAgreementRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && userAgreementRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  if (isAuthorized) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <>
      <Header/>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form
              className="login-form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                    <input
                      ref={loginRef}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Адрес электронной почты"
                      required
                    />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">Пароль</label>
                    <input
                      ref={passwordRef}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Пароль минимум 3 символа"
                      pattern="[0-9a-zA-Z]{3,}"
                      minLength={3}
                      required
                    />
                  </div>
                </div>
                <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input ref={userAgreementRef} type="checkbox" id="id-order-agreement" name="user-agreement" required />
                <span className="custom-checkbox__icon">
                  <svg width="20" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-tick"></use>
                  </svg>
                </span>
                <span className="custom-checkbox__label">Я&nbsp;согласен с
                  <a className="link link--active-silver link--underlined" href="#/">
                    правилами обработки персональных данных
                  </a>&nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default LoginScreen;
