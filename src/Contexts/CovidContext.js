import axios from "axios";
import { createContext, useReducer, useState } from "react";

export const covidContext = createContext();

export const CovidContextProvider = (props) => {
  const newDateFormat = (pDate) => {
    let dd = pDate.split("-")[2].padStart(2, "0");
    let mm = pDate.split("-")[1].padStart(2, "0");
    let yyyy = pDate.split("-")[0];
    return dd + "-" + mm + "-" + yyyy;
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_STATE":
        return {
          ...state,
          State: action.state,
        };
      case "SET_AGE_RANGE":
        return {
          ...state,
          AgeRange: action.ageRange,
        };
      case "SET_GENDER":
        return {
          ...state,
          Gender: action.gender,
        };
      case "SET_STATUS":
        return {
          ...state,
          Status: action.status,
        };
      case "SET_FROM_DATE":
        return {
          ...state,
          FromDate: newDateFormat(action.fromDate),
        };
      case "SET_TO_DATE":
        return {
          ...state,
          ToDate: newDateFormat(action.toDate),
        };
      case "SET_MAIN_DATA":
        return {
          ...state,
          MainData: action.mainData,
        };
      default:
        return state;
    }
  };
  const [data, dispatch] = useReducer(reducer, {
    State: "",
    AgeRange: "",
    Gender: "",
    FromDate: "",
    ToDate: "",
    Status: "",
    MainData: {},
  });

  const [isLoading, setIsLoading] = useState(false);
  const getCustomData = (object = obj, lowerAge = "", upperAge = "") => {
    if (lowerAge == "" && upperAge == "") {
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
    }
    let customData = null,
      error = null,
      loading = true;
    object.LowerAge = lowerAge;
    object.UpperAge = upperAge;
    axios
      .request({
        method: "GET",
        url: "http://localhost:4000/data",
        params: obj,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res;
      })
      .then((res) => {
        customData = res.data;
        loading = false;
        return res;
      })
      .catch((err) => {
        console.log("ERRor:  ", err);
        error = err;
      });
    return [customData, error, loading];
  };
  const obj = {
    FromDate: data.FromDate,
    ToDate: data.ToDate,
    DetectedState: data.State,
    Gender: data.Gender,
    CurrentStatus: data.Status,
  };
  const FetchData = (object = obj) => {
    setIsLoading(true);
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
    object.LowerAge = lowerAge;
    object.UpperAge = upperAge;
    axios
      .request({
        method: "GET",
        url: "http://localhost:4000/data",
        params: obj,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res;
      })
      .then((res) => {
        dispatch({ type: "SET_MAIN_DATA", mainData: res.data });
        setIsLoading(false);
        return res;
      })
      .then((res) => {
        if (isLoading == false)
          console.log("Fetching-----", data.MainData, "----------=====", obj);
        else console.log("Loading...................", obj);
      })
      .catch((err) => console.log("ERRor:  ", err));
  };

  return (
    <covidContext.Provider
      value={[data, dispatch, FetchData, isLoading, getCustomData]}
    >
      {props.children}
    </covidContext.Provider>
  );
};
