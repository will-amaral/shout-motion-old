import { useContext } from 'react';
import AuthContext from 'store/contexts/FirebaseContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
