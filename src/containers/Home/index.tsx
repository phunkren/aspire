import { RouteComponentProps } from '@reach/router';

import React from 'react';

export const Home = (props: RouteComponentProps) => (
  <div>
    <header className="App-header">
      <p>
        Edit lsc
        <code> src/App.tsx</code> and save to reload.
        <pre>{JSON.stringify(props)}</pre>
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
