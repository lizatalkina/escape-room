import MainScreen from '../../pages/main-screen/main-screen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import LoginScreen from '../../pages/login-screen/login-screen';
import ContactsScreen from '../../pages/contacts-screen/contacts-screen';
import QuestScreen from '../../pages/quest-screen/quest-screen';
import BookingScreen from '../../pages/booking-screen/booking-screen';
import MyQuestsScreen from '../../pages/my-quests-screen/my-quests-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path = { AppRoute.Main }
          element = {
            <MainScreen/>
          }
        />
        <Route
          path = { AppRoute.Login }
          element = { <LoginScreen/> }
        />
        <Route
          path = { AppRoute.Contacts }
          element = { <ContactsScreen/> }
        />
        <Route
          path = { AppRoute.Quest }
          element = { <QuestScreen/> }
        />
        <Route
          path = { AppRoute.Booking }
          element = {
            <PrivateRoute
              authorizationStatus = { authorizationStatus }
            >
              <BookingScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path = { AppRoute.MyReservations}
          element = {
            <PrivateRoute
              authorizationStatus = { authorizationStatus }
            >
              <MyQuestsScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path = "*"
          element = { <NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
