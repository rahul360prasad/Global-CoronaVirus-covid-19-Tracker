import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";
// import { fetchCountries } from "../../api";

const Charts = ({
  data: { confirmed, recovered, deaths, fetchedCountries },
  country,
}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    console.log(dailyData);
    fetchAPI();
  }, [dailyData]);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "rgb(0, 138, 230)",
            backgroundColor: "rgb(0, 153, 255, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map(({ recovered }) => recovered),
            label: "Recovered",
            borderColor: "rgb( 0, 204, 0)",
            backgroundColor: "rgb( 0, 204, 0, 0.2)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "rgb( 255, 0, 0)",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: { display: true, text: `Status of COVID-19 All Over the World`, fontColor: "black", },
        maintainAspectRatio:false,
        responsive:true,
      }}
    />
  ) : null;


  const barChart1 = dailyData.length ? (
    <Bar
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "rgb( 0, 0, 255)",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map(({ recovered }) => recovered),
            label: "Recovered",
            borderColor: "rgb( 0, 255, 0)",
            backgroundColor: "rgb( 0, 255, 0, 0.2)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "rgb( 255, 0, 0)",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
      options={{
        legend: { display: true },
        title: { display: true, text: `Status of COVID-19 All Over the World`, fontColor: "black", },
        maintainAspectRatio:false,
        responsive:true,
      }}
    />
  ) : null;

  // const barChart1 = dailyData.length ? (
  //   <Bar
  //     data={{
  //       labels: dailyData.map(({ date }) => date),
  //       datasets: [
  //         {
  //           label: "People",
  //           backgroundColor: [
  //             "rgba(0, 0, 255, 0.6)",
  //             "rgba(0, 255, 0, 0.6)",
  //             "rgba(255, 0, 0, 0.6)",
  //           ],
  //           data: [confirmed.value, recovered.value, deaths.value],
  //         },
  //       ],
  //     }}
  //     options={{
  //       legend: { display: false },
  //       title: { display: true, text: `Bar graph Representaion` },
  //     }}
  //   />
  // ) : null;

  //below is for bar chart code

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.6)",
              "rgba(0, 255, 0, 0.6)",
              "rgba(255, 0, 0, 0.6)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current Status in ${country}`, fontColor: "black", },
        maintainAspectRatio:false,
        responsive:true,
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
      <div className={styles.container1}>{country ? lineChart : barChart1}</div>
    </div>
  );
};

export default Charts;
