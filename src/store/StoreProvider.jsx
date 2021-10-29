import { createContext, useEffect, useState } from "react";
import usersList from "./users.json";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  // dane o uzytkownikach i produktach
  const [users, setUsers] = useState();

  useEffect(() => {
    const listOfUsers = usersList.usersData;
    setUsers(listOfUsers);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
