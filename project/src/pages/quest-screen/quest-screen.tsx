import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchQuestAction } from '../../store/api-actions';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute, DIFFICULTY_OPTIONS, TYPE_OPTIONS } from '../../const';

function QuestScreen (): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const questInfo = useAppSelector((state) => state.quest);

  useEffect(() => {
    dispatch(fetchQuestAction(String(id)));
  }, [dispatch, id]);

  return questInfo ? (
    <>
      <Header/>
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${String(questInfo.previewImgWebp)}, ${String(questInfo.coverImgWebp)} 2x`} />
            <img src={`${String(questInfo.previewImg)}`} srcSet={`${String(questInfo.coverImg)} 2x`} width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">{questInfo.title}</h1>
            <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{TYPE_OPTIONS[questInfo.type]}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width="11" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-person"></use>
                </svg>{questInfo.peopleMinMax[0]}&ndash;{questInfo.peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width="14" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-level"></use>
                </svg>{DIFFICULTY_OPTIONS[questInfo.level]}
              </li>
            </ul>
            <p className="quest-page__description">{questInfo.description}</p>
            <Link to={AppRoute.Booking.replace(':id', `${Number(id)}`)} className="btn btn--accent btn--cta quest-page__btn">Забронировать</Link>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  ) : (
    <NotFoundScreen/>
  );
}

export default QuestScreen;
