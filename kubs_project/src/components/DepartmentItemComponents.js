import React from "react";
import "../styles/DepartmentStyle.css";

const DepartmentItemComponent = ({ department, onDepartmentHandler }) => {
  return (
    <div
      className="departmentItem"
      onClick={() =>
        onDepartmentHandler(department.id, department.departmentName)
      }
    >
      <div className="departmentId">{department.id}</div>
      <div className="departmentName">{department.departmentName}</div>
    </div>
  );
};

export default DepartmentItemComponent;
