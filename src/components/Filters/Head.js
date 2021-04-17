import React, { useContext, useState } from "react";
import { covidContext } from "../../Contexts/CovidContext";
import FromDate from "./FromDate";
import SelectAgeRange from "./SelectAgeRange";
import SelectGender from "./SelectGender";
import SelectLocation from "./SelectLocation";
import SelectStatus from "./SelectStatus";
import ToDate from "./ToDate";
const Head = () => {
  const [, , FetchData] = useContext(covidContext);
  const [location, setLocation] = useState();
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();
  const [ageRange, setAgeRange] = useState();
  const [toDate, setToDate] = useState();
  const [fromDate, setFromDate] = useState();
  return (
    <div className="d-flex justify-content-center mt-3 p-3 w-100">
      <div></div>
      <SelectLocation location={location} setLocation={setLocation} />
      <SelectGender gender={gender} setGender={setGender} />
      <SelectAgeRange setAgeRange={setAgeRange} />
      <SelectStatus status={status} setStatus={setStatus} />
      <FromDate fromDate={fromDate} setFromDate={setFromDate} />
      <ToDate toDate={toDate} setToDate={setToDate} />
      <button type="button" onClick={FetchData} class="btn  btn-primary">
        Filter
      </button>
    </div>
  );
};

export default Head;
