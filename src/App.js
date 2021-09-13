import './App.scss';
import { Provider } from 'react-redux';
import { configureStore, configurePersistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import Tracker from './pages/tracker/tracker.page';

const store = configureStore();
const persistor = configurePersistor(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Tracker/>
      </PersistGate>
    </Provider>
  );
}

export default App;
