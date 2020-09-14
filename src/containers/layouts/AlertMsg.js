import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

const AlertMsg = () => {
  const alerts = useSelector((state) => state.alert);
  console.log("Day la a", alerts);
  return (
    alerts !== null &&
    alerts !== undefined &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Alert key={alert.id} variant={alert.alertType} className="text-center">
        {alert.msg}
      </Alert>
    ))
  );
};

export default AlertMsg;
