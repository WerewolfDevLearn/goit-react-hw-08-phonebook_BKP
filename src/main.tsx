// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { store } from './redux/store';
// import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { userLogin, userRegister } from './services/authAxApi';

// const user1 = {
//   name: 'DOGG',
//   email: 'dogidog@dog.com',
//   password: 'awsameDof123',
// };
// const registerRespons = userRegister(user1);
// console.log('registerRespons: ', registerRespons);

// const user2 = {
//   email: 'dogidog@dog.com',
//   password: 'awsameDof123',
// };

// const Loginrespons = userLogin(user2);
// console.log('Loginrespons: ', Loginrespons);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename='/goit-react-hw-08-phonebook'>
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>,
  // </React.StrictMode>,
);
