import { useContext, useState } from "react";
import { covidContext } from "../../Contexts/CovidContext";
import "./style.css";
const FromDate = () => {
  const [data, dispatch] = useContext(covidContext);
  return (
    <>
      <div className="me-4">
        <input
          type="date"
          className="form-control"
          name="from-date"
          id="fromdate"
          placeholder="From Date"
          defaultValue=""
          onChange={(e) => {
            dispatch({ type: "SET_FROM_DATE", fromDate: e.target.value });
          }}
        />
      </div>
    </>
  );
};

export default FromDate;
