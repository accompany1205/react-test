import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { dateFormat } from "../../utils/format";
import { ITimeSheet } from "../../interfaces/ITimeSheet";

const TimeSheet: React.FC<{}> = () => {
  const { activeTimeSheets, activeUser } = useContext(UserContext);
  const [filteredSheets, setFilteredSheets] =
    useState<ITimeSheet[]>(activeTimeSheets);

  const [month, setMonth] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (activeTimeSheets.length) {
      setFilteredSheets(activeTimeSheets);
    }
  }, [activeTimeSheets]);

  const handleSelectMonthChange = (e: any) => {
    const { value } = e.target;
    setMonth(() => value);
    if (value) {
      setFilteredSheets(
        activeTimeSheets.filter(
          (sheet) => new Date(sheet.startTime).getMonth() === Number(value) - 1
        )
      );
    }else{
      setFilteredSheets(activeTimeSheets);
    }
  };
  return (
    <div>
      <select
        className="form-select mt-4 mb-4"
        aria-label="Default select example"
        value={month}
        onChange={(e) => handleSelectMonthChange(e)}
      >
        <option value="">Select a month</option>
        <option value="1">Jan</option>
        <option value="2">Feb</option>
        <option value="3">Mar</option>
        <option value="4">Apr</option>
        <option value="5">May</option>
        <option value="6">Jun</option>
        <option value="7">Jul</option>
        <option value="8">Aug</option>
        <option value="9">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Position</th>
            <th>Assessment</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredSheets.map((timesheet) => (
            <tr key={timesheet.id}>
              <td>{`${activeUser?.firstName} ${activeUser?.lastName}`}</td>
              <td>{activeUser?.email}</td>
              <td>{activeUser?.position}</td>
              <td>{timesheet.assessment}</td>
              <td>{dateFormat(timesheet.startTime, "yyyy-MM-dd HH:mm:ss")}</td>
              <td>{dateFormat(timesheet.endTime, "yyyy-MM-dd HH:mm:ss")}</td>
              <td>{timesheet.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TimeSheet;
