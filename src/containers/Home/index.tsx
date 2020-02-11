import { RouteComponentProps } from '@reach/router';

import React from 'react';

export const Home = (props: RouteComponentProps) => (
  <div>
    <header>
      <h1>Main header</h1>
    </header>
    <main>
      <pre>{JSON.stringify(props)}</pre>
      <p>
        Here we are just using <code>props</code> to prevent the unused var
        eslint error!
      </p>
    </main>
  </div>
);
