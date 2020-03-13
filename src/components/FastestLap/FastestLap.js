import React from "react";

import "./FastestLap.scss";

const FastestLap = ({ driverName, lapTime }) => {
  return (
    <div className="fastest-lap">
      <div className="fastest-lap__header">Fastest Lap</div>
      <div className="fastest-lap__name">{driverName}</div>
      <div className="fastest-lap__time">{lapTime}</div>
    </div>
  );
};

export default FastestLap;
