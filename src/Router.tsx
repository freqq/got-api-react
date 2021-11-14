import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from 'components/Loader';
import { CHARACTERS_PAGE_URL, HOUSE_PAGE_URL } from 'routes';

const CharactersPage = lazy(() => import('pages/CharactersPage'));
const HousePage = lazy(() => import('pages/HousePage'));

const Router: React.FC = () => (
  <Switch>
    <Suspense fallback={<Loader />}>
      <Route exact path={CHARACTERS_PAGE_URL} component={CharactersPage} />
      <Route exact path={HOUSE_PAGE_URL} component={HousePage} />
    </Suspense>
  </Switch>
);

export default Router;
