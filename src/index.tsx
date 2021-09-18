import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import StyledComponentsTheme from 'ui/styles/StyledComponentTheme';
import MaterialTheme from 'ui/styles/MaterialTheme';
import GlobalStyles from 'ui/styles/globalStyles';
import { store } from 'store';
import App from 'App';
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <StyledComponentsTheme>
        <GlobalStyles />
        <MaterialTheme>
          <App />
        </MaterialTheme>
      </StyledComponentsTheme>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
