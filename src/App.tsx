import React from 'react';
import { Router, Location } from '@reach/router';
import { Home } from 'containers/Home';
import { LocationContext } from 'contexts/location';
import { Overlay } from 'components/overlay';
import { Theme } from 'components/theme';
import { GlobalStyles } from 'styles/global';

const App = () => {
  return (
    <Theme>
      <Location>
        {({ location }) => (
          <LocationContext.Provider value={location}>
            <GlobalStyles />
            <Router>
              <Home path="/" />
            </Router>
            <Overlay aria-hidden="true" />
          </LocationContext.Provider>
        )}
      </Location>
    </Theme>
  );
};

export default App;
