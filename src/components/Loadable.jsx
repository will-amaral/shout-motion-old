import { Suspense } from 'react';
import { LoadingScreen } from 'components';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
