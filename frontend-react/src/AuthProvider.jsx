import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isloggedin, setIsloggedin] = useState(
    !!localStorage.getItem('accessToken')
  );

  return (
    <AuthContext.Provider value={{ isloggedin, setIsloggedin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
