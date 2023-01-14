import { QUESTS_DIFFICULTY } from '../../const';

function DifficultyTypesList (): JSX.Element {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {
          QUESTS_DIFFICULTY.map((quest) => (
            <li className="filter__item" key={quest.id}>
              <input type="radio" name="level" id={quest.id} />
              <label className="filter__label" htmlFor={quest.id}><span className="filter__label-text">{quest.difficulty}</span>
              </label>
            </li>
          ))
        }
      </ul>
    </fieldset>
  );
}

export default DifficultyTypesList;
