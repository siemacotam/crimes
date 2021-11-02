import { createContext, useEffect, useState } from "react";
import usersList from "./users.json";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  // dane o uzytkownikach i produktach
  const [users, setUsers] = useState();
  const [activeUser, setActiveUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const listOfUsers = usersList.usersData;
    setUsers(listOfUsers);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        users,
        setUsers,
        activeUser,
        setActiveUser,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
