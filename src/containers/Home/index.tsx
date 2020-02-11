import { RouteComponentProps } from '@reach/router';

import React from 'react';

export const Home = (props: RouteComponentProps) => {
  const foo = 'bang';
  let bar = 1;
  return (
    <div {...props}>
      <header className="App-header">
        <p className="y">
          Edit lsc;
          <code>src/App.tsx</code> and save to reload.
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
};
