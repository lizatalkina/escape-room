import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoute, DAYS_OPTIONS, DIFFICULTY_OPTIONS } from '../../const';
import { fetchMyReservationsAction, deleteReservation } from '../../store/api-actions';

function MyQuestsScreen (): JSX.Element {
  const dispatch = useAppDispatch();
  const myReservationsInfo = useAppSelector((state) => state.reservations);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMyReservationsAction());
  }, [dispatch]);

  return (myReservationsInfo && myReservationsInfo.length > 0) ? (
    <>
      <Header/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <div className="cards-grid">
            {
              myReservationsInfo.map((myReservation) => (
                <div className="quest-card" key={myReservation.id}>
                  <div className="quest-card__img">
                    <picture>
                      <source type="image/webp" srcSet={myReservation.quest.previewImgWebp} />
                      <img src={myReservation.quest.previewImg} srcSet={myReservation.quest.previewImg} width="344" height="232" alt={myReservation.quest.title} />
                    </picture>
                  </div>
                  <div className="quest-card__content">
                    <div className="quest-card__info-wrapper"><Link to={AppRoute.Quest.replace(':id', `${myReservation.quest.id}`)} className="quest-card__link">{myReservation.quest.title}</Link>
                      <span className="quest-card__info">[{DAYS_OPTIONS[myReservation.date]}, {myReservation.time}. {myReservation.location.address}]</span>
                    </div>
                    <ul className="tags quest-card__tags">
                      <li className="tags__item">
                        <svg width="11" height="14" aria-hidden="true">
                          <use xlinkHref="#icon-person"></use>
                        </svg>{myReservation.peopleCount}&nbsp;чел
                      </li>
                      <li className="tags__item">
                        <svg width="14" height="14" aria-hidden="true">
                          <use xlinkHref="#icon-level"></use>
                        </svg>{DIFFICULTY_OPTIONS[myReservation.quest.level]}
                      </li>
                    </ul>
                    <button className="btn btn--accent btn--secondary quest-card__btn" type="button"
                      onClick = {(evt) => {
                        evt.preventDefault();
                        dispatch(deleteReservation(myReservation.id));
                        dispatch(fetchMyReservationsAction());
                        navigate(`${AppRoute.MyReservations}`);
                      }}
                    >Отменить
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>
      <Footer/>
    </>
  ) : (
    <>
      <Header />
      <div className="cards-grid">
        <p>Бронирование не найдено</p>
      </div>
      <Footer />
    </>
  );
}

export default MyQuestsScreen;
