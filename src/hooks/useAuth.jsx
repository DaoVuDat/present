import {useState} from 'react';

const useAuth = () => {

  const initialAuth = () => localStorage.getItem("token") || null;
  const [isAuth, setIsAuth] = useState(initialAuth);

  const setAuth = (login) => {
    if(login) {
      setIsAuth("login")
      localStorage.setItem("token", "login")
    } else {
      setIsAuth(null)
      localStorage.removeItem("token")
    }
  }

  return [isAuth, setAuth];
};

export default useAuth;
