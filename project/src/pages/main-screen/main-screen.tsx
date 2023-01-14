import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import QuestsTypesList from '../../components/quests-types-list/quests-types-list';
import DifficultyTypesList from '../../components/difficulty-types-list/difficulty-types-list';
import QuestsList from '../../components/quests-list/quests-list';

type MainScreenProps = {
  cardsCount: number;
}

function MainScreen ({cardsCount}: MainScreenProps): JSX.Element {
  return (
    <>
      <Header/>
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <QuestsTypesList/>
              <DifficultyTypesList/>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <QuestsList cardsCount = {cardsCount}/>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default MainScreen;
