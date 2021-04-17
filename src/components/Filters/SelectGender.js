import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { covidContext } from "../../Contexts/CovidContext";
const SelectGender = () => {
  const [, dispatch] = useContext(covidContext);
  return (
    <div className=" me-4">
      <select
        className="form-control"
        onChange={(e) =>
          dispatch({ type: "SET_GENDER", gender: e.target.value })
        }
        name="gender"
        id="gender"
      >
        <option value="">Select Gender</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
    </div>
  );
};

export default SelectGender;
