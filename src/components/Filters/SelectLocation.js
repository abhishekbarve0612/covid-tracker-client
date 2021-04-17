import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { covidContext } from "../../Contexts/CovidContext";
const SelectLocation = () => {
  const [allStates, setAllStates] = useState(null);
  const [error, setError] = useState(null);
  const [data, dispatch] = useContext(covidContext);
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/allStates",
        {},
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res, " asreg");
        return res;
      })
      .then((res) => setAllStates(res.data));
    console.log(allStates);
  }, []);
  return (
    <div className="me-4">
      <select
        className="form-control"
        onChange={(e) => dispatch({ type: "SET_STATE", state: e.target.value })}
        name="location"
        id="location"
        defaultValue=""
      >
        <option value="">Select Location</option>
        {allStates &&
          allStates
            .filter((state) => state != "")
            .map((state, index) => {
              return (
                <option key={index} value={state}>
                  {state}
                </option>
              );
            })}
      </select>
    </div>
  );
};

export default SelectLocation;
