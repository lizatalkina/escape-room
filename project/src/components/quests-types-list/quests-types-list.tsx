import { QUESTS_TYPES } from '../../const';

function QuestsTypesList (): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {
          QUESTS_TYPES.map((quest) => (
            <li className="filter__item" key={quest.id}>
              <input type="radio" name="type" id={quest.id} />
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
