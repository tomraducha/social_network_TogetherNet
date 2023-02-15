import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
//dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
)
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>,

  </Provider>
)
