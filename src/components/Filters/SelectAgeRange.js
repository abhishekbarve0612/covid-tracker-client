import { useContext } from "react";
import { covidContext } from "../../Contexts/CovidContext";

const SelectAgeRange = () => {
  const [, dispatch] = useContext(covidContext);
  return (
    <div className="me-4">
      <select
        className="form-control"
        onChange={(e) =>
          dispatch({ type: "SET_AGE_RANGE", ageRange: e.target.value })
        }
        name="ageRange"
        id="ageRange"
      >
        <option value="">Select Age Range</option>
        <option value="CH">Child [0-16]</option>
        <option value="YA">Young [17-30]</option>
        <option value="MA">Middle Aged [31-45]</option>
        <option value="OA">Old Aged [Above 45]</option>
      </select>
    </div>
  );
};

export default SelectAgeRange;
