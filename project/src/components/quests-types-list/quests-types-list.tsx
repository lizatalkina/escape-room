import { QUESTS_TYPES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeQuestType } from '../../store/action';

function QuestsTypesList (): JSX.Element {
  const dispatch = useAppDispatch();
  const currentType = useAppSelector((state) => state.typeFilter);
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {
          QUESTS_TYPES.map((quest) => (
            <li className="filter__item" key={quest.id}
              onClick = {(evt) => {
                evt.preventDefault();
                dispatch(changeQuestType({typeFilter: quest.questType}));
              }}
            >
              <input type="radio" name="type" id={quest.id} checked = {currentType === quest.questType} readOnly/>
              <label className="filter__label" htmlFor={quest.id}>
                <svg className="filter__icon" width={quest.width} height="30" aria-hidden="true">
                  <use xlinkHref={quest.icon}></use>
                </svg><span className="filter__label-text">{quest.type}</span>
              </label>
            </li>
          ))
        }
      </ul>
    </fieldset>
  );
}

export default QuestsTypesList;
