import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { getAuth, User, onAuthStateChanged } from 'firebase/auth';


export const UserContext = createContext({});

export const UserContextProvider = () => {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);
  const [loaded, setLoaded] = useState(false);
  const { Provider } = UserContext;
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoaded(true);
    });
  }, [auth]);

  if (!loaded) {
    return <></>;
  }

  return <Provider value={value}>{props.children}</Provider>;
};
