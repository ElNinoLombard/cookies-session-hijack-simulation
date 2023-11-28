import React, { lazy, Suspense } from 'react';

const LazySessionPage = lazy(() => import('./SessionPage'));

const SessionPage = props => (
  <Suspense fallback={null}>
    <LazySessionPage {...props} />
  </Suspense>
);

export default SessionPage;
