
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './services/Reducers/index'

const store=createStore(rootReducer)
console.warn("store data", store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(
// <Provider store={store}>
//   <App></App>
// </Provider>,
// document.getElementById('root')
// );

