import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
//import BookingForm from '../../components/booking-form/booking-form';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect, memo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormEvent} from 'react';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { fetchQuestBookingAction, fetchQuestAction, postReservationData } from '../../store/api-actions';
import Map from '../../components/map/map';
import { MarkerLocation } from '../../types/map-data';
import { ReservationData } from '../../types/user-data';

const getDateTime = (date: string, time: string): string => `${date}_${time.substring(0, time.indexOf(':'))}h${time.substring(time.indexOf(':') + 1)}m`;
const getDateFromDateTime = (dateTime: string): string => dateTime.substring(0, dateTime.indexOf('_'));
const getTimeFromDateTime = (dateTime: string): string => `${dateTime.substring(dateTime.indexOf('_') + 1, dateTime.indexOf('h'))}:${dateTime.substring(dateTime.indexOf('h') + 1, dateTime.length - 1)}`;

function BookingScreen (): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const questInfo = useAppSelector((state) => state.quest);
  const bookingInfo = useAppSelector((state) => state.bookingInfo);
  const locations = [] as MarkerLocation[];
  let selectedPoint = {} as MarkerLocation;

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: '',
    peopleCount: 0,
  });
  const fieldChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (reservationData: ReservationData) => {
    dispatch(postReservationData(reservationData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const childrenElement = document.getElementById('children') as HTMLInputElement;
    onSubmit({
      id: Math.random() * (100 - 1) + 1,
      date: getDateFromDateTime(formData.date),
      time: getTimeFromDateTime(formData.date),
      contactPerson: formData.contactPerson,
      phone: formData.phone,
      withChildren: childrenElement.checked,
      peopleCount: Number(formData.peopleCount),
      locationId: selectedPoint.locationId,
      questId: Number(questInfo?.id),
    });
  };

  useEffect(() => {
    dispatch(fetchQuestBookingAction(String(id)));
    dispatch(fetchQuestAction(String(id)));
  }, [dispatch, id]);

  let bookingAddress = '';
  if (bookingInfo?.locations !== undefined) {
    bookingInfo.locations.forEach((booking) => locations.push({
      latitude: booking.coords[0],
      longitude: booking.coords[1],
      locationId: booking.id,
    }));
    if (bookingInfo.locations.length > 0) {
      bookingAddress = bookingInfo.locations[0].address;
      selectedPoint = locations[0];
    }
  }

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
                <div className="map__container">
                  <Map
                    locations = { locations }
                    selectedPoint = { selectedPoint }
                  />
                </div>
              </div>
              <p className="booking-map__address">Вы&nbsp;выбрали: {bookingAddress}</p>
            </div>
          </div>
          <form
            className="booking-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
            onSubmit={handleSubmit}
          >
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Выбор даты и времени</legend>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Сегодня</legend>
                <div className="booking-form__date-inner-wrapper">
                  {
                    bookingInfo?.slots.today.map((slot) => (
                      <label className="custom-radio booking-form__date" key={getDateTime('today', slot.time)}>
                        <input onChange={fieldChangeHandler} type="radio" id={getDateTime('today', slot.time)} name="date" required value={getDateTime('today', slot.time)} disabled={!slot.isAvailable}/><span className="custom-radio__label">{slot.time}</span>
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
                      <label className="custom-radio booking-form__date" key={getDateTime('tomorrow', slot.time)}>
                        <input onChange={fieldChangeHandler} type="radio" id={getDateTime('tomorrow', slot.time)} name="date" required value={getDateTime('tomorrow', slot.time)} disabled={!slot.isAvailable}/><span className="custom-radio__label">{slot.time}</span>
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
                <input onChange={fieldChangeHandler} value={formData.contactPerson} type="text" id="name" name="contactPerson" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}" />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
                <input onChange={fieldChangeHandler} value={formData.phone} type="tel" id="tel" name="phone" placeholder="Телефон" required pattern="[0-9]{10,}" />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">Количество участников</label>
                <input onChange={fieldChangeHandler} value={formData.peopleCount} type="number" id="person" name="peopleCount" placeholder="Количество участников" required />
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input onChange={fieldChangeHandler} value={formData.withChildren} type="checkbox" id="children" name="withChildren" />
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

export default memo(BookingScreen);
