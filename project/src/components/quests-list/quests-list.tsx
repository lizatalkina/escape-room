import QuestCard from '../quest-card/quest-card';
import { Quest } from '../../types/quest';

type ListProps = {
  quests: Quest[];
}

function QuestsList (props: ListProps): JSX.Element {
  const { quests } = props;
  return (
    <div className="cards-grid">
      {
        quests.map((quest) => (
          <div className="quest-card" key={quest.id}>
            <QuestCard quest = {quest}/>
          </div>
        ))
      }
    </div>
  );
}

export default QuestsList;
