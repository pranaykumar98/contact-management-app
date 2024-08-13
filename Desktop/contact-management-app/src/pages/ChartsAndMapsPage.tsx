import React from "react";
import LineGraph from "../components/LineGraph";
import CovidMap from "../components/CovidMap";

const ChartsAndMapsPage: React.FC = () => {
  return (
    <div
      className="mt-20 overflow-y-auto"
      style={{ height: "calc(100vh - 8rem)" }}
    >
      <h1 className="text-2xl font-bold mb-4">Charts and Maps Page</h1>
      <div className="mb-8">
        <LineGraph />
      </div>
      <div>
        <CovidMap />
      </div>
    </div>
  );
};

export default ChartsAndMapsPage;
