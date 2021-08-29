import { DotLoading } from 'components/Loading';
import renderRoutes from 'configs/routerConfig';
import { NotFoundPage } from 'pages';
import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);
  const isAuth = false;
  return (
    <>
      {loading ? (
        <div>
          <DotLoading />
        </div>
      ) : (
        <Router>
          <Suspense fallback={<DotLoading />}></Suspense>
          <Switch>
            {renderRoutes(isAuth)}{' '}
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
