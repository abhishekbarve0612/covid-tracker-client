import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { covidContext } from "../../Contexts/CovidContext";

const MigratedCard = () => {
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, ,] = useContext(covidContext);
  useEffect(() => {
    let lowerAge = "",
      upperAge = "";
    if (data.AgeRange != "") {
      switch (data.AgeRange) {
        case "CH":
          lowerAge = 0;
          upperAge = 16;
          break;
        case "YA":
          lowerAge = 17;
          upperAge = 30;
          break;
        case "MA":
          lowerAge = 31;
          upperAge = 45;
          break;
        case "OA":
          lowerAge = 46;
          upperAge = 500;
          break;
        default:
          break;
      }
    }
    setIsLoading(true);
    axios
      .request({
        method: "GET",
        url: "https://covid-tracker-api-21.herokuapp.com/data",
        params: {
          FromDate: data.FromDate,
          ToDate: data.ToDate,
          DetectedState: data.State,
          Gender: data.Gender,
          CurrentStatus: "Migrated",
          LowerAge: lowerAge,
          UpperAge: upperAge,
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res;
      })
      .then((res) => {
        setCount(res.data.length);
        setIsLoading(false);
        return res;
      })
      .catch((err) => console.log("ERRor:  ", err));
  }, []);
  return (
    <div>
      <div
        className={`card text-white bg-warning mb-3 mt-3 m-auto text-center align-content-center`}
        style={{ width: "30vw" }}
      >
        <div className="card-header">Total Migrated Cases</div>
        <div className="card-body">
          {isLoading == false ? (
            <h5 className="card-title">{count}</h5>
          ) : (
            <h5 className="card-title">Loading...</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default MigratedCard;
