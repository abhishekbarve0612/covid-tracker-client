import { useContext } from "react";
import { covidContext } from "../../Contexts/CovidContext";
import "./style.css";
const ToDate = () => {
  const [data, dispatch] = useContext(covidContext);
  return (
    <>
      <div className="me-4">
        <input
          type="date"
          className="form-control"
          name="to-date"
          placeholder="To Date"
          defaultValue=""
          id="todate"
          onChange={(e) =>
            dispatch({ type: "SET_TO_DATE", toDate: e.target.value })
          }
        />
      </div>
    </>
  );
};

export default ToDate;
