import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";

const UserTable: React.FC<{}> = () => {
  const { users, setActiveUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClickUserRow = (user: IUser) => {
    setActiveUser(() => user);
    console.log('handleClick');
    navigate("/timesheet");
  };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => handleClickUserRow(user)}>
              <td>
                <img className="user-table-avatar" src={user.avatar?.link} alt="user avatar" />
              </td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>{user.position}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
