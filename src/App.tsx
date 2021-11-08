import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Router from 'Router';
import { store, history } from 'store';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>
);

export default App;
