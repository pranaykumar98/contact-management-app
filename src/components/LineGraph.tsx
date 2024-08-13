import React from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import axios from "axios";

const fetchHistoricalData = async () => {
  try {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};

const LineGraph: React.FC = () => {
  const { data, error, isLoading } = useQuery(
    "historicalData",
    fetchHistoricalData
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: "Cases",
        data: Object.values(data.cases),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "COVID-19 Cases Over Time",
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineGraph;
