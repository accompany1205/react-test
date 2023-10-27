/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Route, Routes } from "react-router-dom";
import UserTable from "../pages/UserTable";
import TimeSheet from "../pages/TimeSheet";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<UserTable/>} />
    <Route path="/timesheet" element={<TimeSheet/>} />
    {/* <Route path="/fiat-on-ramp" component={FiatOnRamp} /> */}
  </Routes>
);

export default Router;
