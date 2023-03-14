import React, { useState, useContext, useEffect, createContext } from "react";

import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const dataFromLS = JSON.parse(localStorage.getItem("user") || null);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = (props) => {

  const navigate = useNavigate()

  // Current Authenticated user
  const [currentUser, setCurrentUser] = useState(dataFromLS);

  // cookies
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // useeffect to update current user
  // useEffect(() => {
  //   if (cookies.user === undefined && dataFromLS === null) {
  //     setCurrentUser(null);
  //     window.open(`${process.env.REACT_APP_MAIN}/login/provider`, "_self");
  //   }
  //   if (cookies.user && dataFromLS === null) {
  //     localStorage.setItem("user", JSON.stringify(cookies.user));
  //   }
  // }, []);

    // useeffect to update current user
  useEffect(() => {
    if (cookies.user === 'undefined') {
      setCurrentUser(null);
      window.open(`${process.env.REACT_APP_MAIN}/login/provider`, "_self");
    }
    if (cookies.user !== 'undefined' && dataFromLS === null) {
     
      localStorage.setItem("user", JSON.stringify(cookies.user));
    }
  }, []);

  // check for onboarding steps
  
  

   useEffect(() => {
    console.log("current user has changed so navigating away")
 console.log("curr", currentUser.serviceProvider)
    if(currentUser !== null){
      if(currentUser.serviceProvider === undefined || currentUser.serviceProvider === null){
  navigate('/onboarding')
      }
    
    }

   }, [currentUser])

  // deleting/destroying user details upon logout
  const logOut = () => {
    removeCookie("user");
    localStorage.clear();
    window.location.reload();
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
