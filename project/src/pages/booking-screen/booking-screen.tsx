import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
//import BookingForm from '../../components/booking-form/booking-form';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { fetchQuestBookingAction, fetchQuestAction } from '../../store/api-actions';

function BookingScreen (): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const questInfo = useAppSelector((state) => state.quest);
  const bookingInfo = useAppSelector((state) => state.bookingInfo);

  useEffect(() => {
    dispatch(fetchQuestBookingAction(String(id)));
    dispatch(fetchQuestAction(String(id)));
  }, [dispatch, id]);

  return questInfo ? (
    <>
      <Header/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${String(questInfo.previewImgWebp)}, ${String(questInfo.coverImgWebp)} 2x`} />
            <img src={`${String(questInfo.previewImg)}`} srcSet={`${String(questInfo.coverImg)} 2x`} width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{questInfo.title}</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container"></div>
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м. Петроградская</p>
            </div>
          </div>
          <form className="booking-form" action="https://echo.htmlacademy.ru/" method="post">
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Выбор даты и времени</legend>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Сегодня</legend>
                <div className="booking-form__date-inner-wrapper">
                  {
                    bookingInfo?.slots.today.map((slot) => (
                      <label className="custom-radio booking-form__date" key={slot.time}>
                        <input type="radio" id="today9h45m" name="date" required value="today9h45m" disabled={!slot.isAvailable}/><span className="custom-radio__label">{slot.time}</span>
                      </label>
                    ))
                  }
                </div>
              </fieldset>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Завтра</legend>
                <div className="booking-form__date-inner-wrapper">
                  {
                    bookingInfo?.slots.tomorrow.map((slot) => (
                      <label className="custom-radio booking-form__date" key={slot.time}>
                        <input type="radio" id="today9h45m" name="date" required value="today9h45m" disabled={!slot.isAvailable}/><span className="custom-radio__label">{slot.time}</span>
                      </label>
                    ))
                  }
                </div>
              </fieldset>
            </fieldset>
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Контактная информация</legend>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="name">Ваше имя</label>
                <input type="text" id="name" name="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}" />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
                <input type="tel" id="tel" name="tel" placeholder="Телефон" required pattern="[0-9]{10,}" />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">Количество участников</label>
                <input type="number" id="person" name="person" placeholder="Количество участников" required />
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input type="checkbox" id="children" name="children" checked />
                <span className="custom-checkbox__icon">
                  <svg width="20" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-tick"></use>
                  </svg>
                </span>
                <span className="custom-checkbox__label">Со&nbsp;мной будут дети
                </span>
              </label>
            </fieldset>
            <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
              <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">Я&nbsp;согласен с
                <a className="link link--active-silver link--underlined" href="#/">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </main>
      <Footer/>
    </>
  ) : (<NotFoundScreen/>);
}

export default BookingScreen;
