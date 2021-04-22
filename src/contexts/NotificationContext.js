import { createContext, useEffect, useReducer } from 'react';
import { useSnackbar } from 'notistack';
import { Alert } from 'components';
import PropTypes from 'prop-types';
import { db, Timestamp } from 'utils/lib/firebase';

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

const NotificationContext = createContext({
  ...initialState,
  markAsRead: () => Promise.resolve(),
  markAllAsRead: () => Promise.resolve(),
});

export const NotificationProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(
    () =>
      db
        .collection('Notifications')
        .where('isUnread', '==', true)
        .where('createdAt', '>=', Timestamp.fromDate(new Date()))
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              const doc = change.doc.data();
              enqueueSnackbar('', {
                content: <Alert title={doc.title} description={doc.description} />,
                anchorOrigin: {
                  horizontal: 'center',
                  vertical: 'top',
                },
              });
            }
          });
        }),
    [dispatch, enqueueSnackbar]
  );

  useEffect(
    () =>
      db
        .collection('Notifications')
        .where('isUnread', '==', true)
        .onSnapshot((snapshot) => {
          const payload = [];
          snapshot.forEach((doc) => {
            payload.push({ id: doc.id, ...doc.data() });
          });
          dispatch({
            type: 'ON_MESSAGE',
            payload,
          });
        }),
    [dispatch]
  );

  const markAsRead = async (id) => {
    await db.collection('Notifications').doc(id).update({ isUnread: false });
  };

  const markAllAsRead = async () => {
    const query = await db
      .collection('Notifications')
      .where('isUnread', '==', true)
      .get();
    if (query.size > 0) {
      query.forEach((doc) => {
        db.collection('Notifications').doc(doc.id).update({ isUnread: false });
      });
    }
  };

  return (
    <NotificationContext.Provider value={{ ...state, markAsRead, markAllAsRead }}>
      {children}
    </NotificationContext.Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotificationContext;
