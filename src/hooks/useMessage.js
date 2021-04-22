import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { msg, db } from 'utils/lib/firebase';

const useMessage = () => {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    msg.onMessage((payload) => {
      console.log('Message received: ', payload);
    });
  }, []);
};

export default useMessage;
