import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { covidContext } from "../../Contexts/CovidContext";

const GistCard = () => {
  const [data] = useContext(covidContext);
  return (
    <div>
      <div
        className={`card text-white bg-primary mb-3 mt-3 m-auto text-center align-content-center`}
        style={{ width: "30vw" }}
      >
        <div className="card-header">Total Cases</div>
        <div className="card-body">
          {data.MainData != null ? (
            <h5 className="card-title">{data.MainData.length}</h5>
          ) : (
            <h5 className="card-title">Loading...</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default GistCard;
