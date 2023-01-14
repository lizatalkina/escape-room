import React from 'react';
import QuestCard from '../quest-card/quest-card';

type QuestsListProps = {
  cardsCount: number;
}

function QuestsList ({cardsCount}: QuestsListProps): JSX.Element {
  return (
    <div className="cards-grid">
      {Array.from({length: cardsCount}, (_, i) => i + 1).map((e, _) => <div className="quest-card" key={e}><QuestCard /></div>)}
    </div>
  );
}

export default QuestsList;
