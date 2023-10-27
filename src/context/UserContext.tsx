/* eslint-disable */
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { IUser } from "../interfaces/IUser";
import { ITimeSheet } from "../interfaces/ITimeSheet";
import UserJson from "../json/users.json";
import TimeSheets from "../json/timesheets.json";

interface UserContextState {
  users: IUser[];
  activeUser: IUser | null;
  setActiveUser: Function;
  timeSheets: ITimeSheet[];
  activeTimeSheets: ITimeSheet[];
}

export const UserContext = createContext<UserContextState>(
  {} as UserContextState
);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>(UserJson);
  const [activeUser, setActiveUser] = useState<IUser | null>(null);
  const [timeSheets, setTimeSheets] = useState<ITimeSheet[]>(TimeSheets);
  const [activeTimeSheets, setActiveTimeSheets] = useState<ITimeSheet[]>([]);

  useEffect(() => {
    if (activeUser) {
      setActiveTimeSheets(() =>
        timeSheets.filter((_timesheet) => _timesheet.userId === activeUser.id)
      );
    }
  }, [activeUser]);

  return (
    <UserContext.Provider
      value={{
        users,
        activeUser,
        setActiveUser,
        timeSheets,
        activeTimeSheets,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
