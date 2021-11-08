import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { CHARACTERS_PAGE_URL, HOUSE_PAGE_URL } from 'routes';

import CharactersPage from 'pages/CharactersPage';
import HousePage from 'pages/HousePage';

const Router: React.FC = () => (
  <Switch>
    <Route exact path={CHARACTERS_PAGE_URL} component={CharactersPage} />
    <Route exact path={HOUSE_PAGE_URL} component={HousePage} />
  </Switch>
);

export default Router;
