import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { covidContext } from "../../Contexts/CovidContext";
const SelectStatus = () => {
  const [statusList, setStatusList] = useState(null);
  const [status, dispatch] = useContext(covidContext);
  useEffect(() => {
    axios
      .get(
        "https://covid-tracker-api-21.herokuapp.com/allStatus",
        {},
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res, " asreg");
        return res;
      })
      .then((res) => setStatusList(res.data));
    console.log(statusList);
  }, []);
  return (
    <div className="me-4">
      <select
        className="form-control"
        onChange={(e) =>
          dispatch({ type: "SET_STATUS", status: e.target.value })
        }
        name="status"
        id="status"
      >
        <option value="">Select Status</option>
        {statusList &&
          statusList
            .filter((status) => status != "")
            .map((status, index) => {
              return (
                <option key={index} value={status}>
                  {status}
                </option>
              );
            })}
      </select>
    </div>
  );
};

export default SelectStatus;
