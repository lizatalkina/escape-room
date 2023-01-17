import { QUESTS_DIFFICULTY } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeQuestDifficulty } from '../../store/action';

function DifficultyTypesList (): JSX.Element {
  const dispatch = useAppDispatch();
  const currentDifficulty = useAppSelector((state) => state.difficultyFilter);
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {
          QUESTS_DIFFICULTY.map((quest) => (
            <li className="filter__item" key={quest.id}
              onClick = {(evt) => {
                evt.preventDefault();
                dispatch(changeQuestDifficulty({difficultyFilter: quest.difficultyOption}));
              }}
            >
              <input type="radio" name="level" id={quest.id} checked = {currentDifficulty === quest.difficultyOption} readOnly/>
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
