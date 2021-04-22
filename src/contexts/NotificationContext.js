import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { db } from 'utils/lib/firebase';

const initialState = {
  notifications: [],
};

const reducer = (state, action) => {
  if (action.type === 'ON_MESSAGE') {
    return {
      ...state,
      notifications: action.payload,
    };
  }

  return state;
};

const NotificationContext = createContext(initialState);

export const NotificationProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(
    () =>
      db
        .collection('Notifications')
        .where('isUnread', '==', true)
        .onSnapshot((query) => {
          const payload = [];
          query.forEach((doc) => {
            payload.push({ id: doc.id, ...doc.data() });
          });
          dispatch({
            type: 'ON_MESSAGE',
            payload,
          });
        }),
    [dispatch]
  );

  return (
    <NotificationContext.Provider value={state}>{children}</NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotificationContext;
