import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import store from './store';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
