import { Quest } from '../../types/quest';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { DIFFICULTY_OPTIONS } from '../../const';

type QuestProps = {
  quest: Quest;
};

function QuestCard ( { quest }: QuestProps ): JSX.Element {
  const {id, title, previewImg, previewImgWebp, level, peopleMinMax} = quest;
  return (
    <>
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp} />
          <img src={previewImg} srcSet={previewImg} width="344" height="232" alt={title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link to={AppRoute.Quest.replace(':id', `${id}`)} className="quest-card__link">{title}
          </Link>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{peopleMinMax[0]}&ndash;{peopleMinMax ? peopleMinMax[1] : ''}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{DIFFICULTY_OPTIONS[level]}
          </li>
        </ul>
      </div>
    </>
  );
}

export default QuestCard;
