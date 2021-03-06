import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose, Reducer, AnyAction } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { characters, ICharacters } from 'reducers/charactersReducer';
import { charactersFilter, ICharactersFilter } from 'reducers/charactersFilterReducer';
import { house, IHouse } from 'reducers/houseReducer';

export const history = createBrowserHistory();

const middleware = [thunkMiddleware, routerMiddleware(history)];
let composeEnhancers = compose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IApplicationStore {
  characters: ICharacters;
  charactersFilter: ICharactersFilter;
  house: IHouse;
}

if (
  process.env.NODE_ENV === 'development' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
)
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers<Reducer<IApplicationStore, AnyAction>>({
  router: connectRouter(history),
  characters,
  charactersFilter,
  house,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
