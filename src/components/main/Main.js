import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { covidContext } from "../../Contexts/CovidContext";
import DeceasedCard from "./DeceasedCard";
import GistCard from "./GistCard";
import HospitalizedCard from "./HospitalizedCard";
import MigratedCard from "./MigratedCard";
import RecoveredCard from "./RecoveredCard";

const Main = () => {
  let [, , , isLoading] = useContext(covidContext);
  return (
    <div>
      <GistCard />
      <RecoveredCard />
      <MigratedCard />
      <HospitalizedCard />
      <DeceasedCard />
      {isLoading == true ? (
        <h3>Loading Data.......</h3>
      ) : (
        <h3>Not Loadng....</h3>
      )}
    </div>
  );
};

export default Main;
