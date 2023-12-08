import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "guest" });

  const updateUser = (logged) => {
    setUser({ username: logged });
  };

  const cleanUser = () => {
    setUser({ username: "guest" });
  };

  return (
    <UserContext.Provider value={{ user, updateUser, cleanUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
