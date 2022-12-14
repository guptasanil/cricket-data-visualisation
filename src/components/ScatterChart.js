import React from "react";
import { Scatter, Bar, Pie, Doughnut } from "react-chartjs-2";
import { useRef } from "react";
import { getElementAtEvent } from "react-chartjs-2";
import { TopScoreData } from "../topScoreData";
import {
  IndiaColour,
  OtherColour,
  PakistanColour,
  WIColour,
  SAColour,
  AustralianColour,
} from "../variables";

import { useState } from "react";
import {
  AustralianPlayers,
  IndianPlayers,
  SrilankanPlayers,
  PakistanPlayers,
  SAPlayers,
  WIPlayers,
  OtherPlayers,
} from "../data2";

function ScatterChart() {
  const [topScoreData, setTopScoreData] = useState({
    labels: TopScoreData.map((data) => data.Player),
    datasets: [],
  });
  const [checked, setChecked] = React.useState(false);

  const sizeHandleChange = () => {
    setChecked(!checked);
    if (checked) {
      setUserData({
        datasets: [
          {
            label: "Indian Players",
            data: IndianPlayers,
            pointRadius: 5,
          },
          {
            label: "Srilankan Players",
            data: SrilankanPlayers,
            pointRadius: 5,
          },
          {
            label: "Australian Players",
            data: AustralianPlayers,
            pointRadius: 5,
          },
          {
            label: "Pakistani Players",
            data: PakistanPlayers,
            pointRadius: 5,
          },
          {
            label: "South African Players",
            data: SAPlayers,
            pointRadius: 5,
          },
          {
            label: "West Indian Players",
            data: WIPlayers,
            pointRadius: 5,
          },
          {
            label: "Other Players",
            data: OtherPlayers,
            pointRadius: 5,
          },
        ],
      });
    } else {
      setUserData({
        datasets: [
          {
            label: "Indian Players",
            data: IndianPlayers,
            pointRadius: IndianPlayers.map(
              (data) => (data.Ave / 180) * data.Ave
            ),
          },
          {
            label: "Srilankan Players",
            data: SrilankanPlayers,
            pointRadius: SrilankanPlayers.map(
              (data) => (data.Ave / 180) * data.Ave
            ),
          },
          {
            label: "Australian Players",
            data: AustralianPlayers,
            pointRadius: AustralianPlayers.map(
              (data) => (data.Ave / 180) * data.Ave
            ),
          },
          {
            label: "Pakistani Players",
            data: PakistanPlayers,
            pointRadius: PakistanPlayers.map(
              (data) => (data.Ave / 180) * data.Ave
            ),
          },
          {
            label: "South African Players",
            data: SAPlayers,
            pointRadius: SAPlayers.map((data) => (data.Ave / 180) * data.Ave),
          },
          {
            label: "West Indian Players",
            data: WIPlayers,
            pointRadius: WIPlayers.map((data) => (data.Ave / 180) * data.Ave),
          },
          {
            label: "Other Players",
            data: OtherPlayers,
            pointRadius: OtherPlayers.map(
              (data) => (data.Ave / 180) * data.Ave
            ),
          },
        ],
      });
    }
  };

  const [barUserData, setBarUserData] = useState({
    datasets: [],
  });

  const [pieUserData, setpieUserData] = useState({
    datasets: [
      {
        data: null,
      },
    ],
  });

  const chartRef = useRef();
  var onClick = (event) => {
    const points = getElementAtEvent(chartRef.current, event);
    if (points[0]) {
      const dataset = points[0].datasetIndex;
      const index = points[0].index;
      var player = userData.datasets[dataset].data[index];

      const previousScoresData = player.previousScores;
      setBarUserData({
        labels: player.previousScoreDates,
        datasets: [
          {
            type: "line",
            label: " Average",
            data: [
              player.Ave,
              player.Ave,
              player.Ave,
              player.Ave,
              player.Ave,
              player.Ave,
              player.Ave,
              player.Ave,
              player.Ave,
              player.Ave,
            ],
            borderColor: "rgba(255,98,132,255)",
            backgroundColor: "rgba(255,98,132,255)",
            pointBackgroundColor: "rgba(255,98,132,255)",
            pointBorderColor: "rgba(255,98,132,255)",
            pointHoverBackgroundColor: "rgba(255,98,132,255)",
            pointHoverBorderColor: "rgba(255,98,132,255)",
            pointRadius: 1,
          },
          {
            label: player.Player,
            data: previousScoresData,
            backgroundColor: player.colour,
            borderColor: player.borderColor,
          },
        ],
      });
      console.log(player);
      setpieUserData({
        labels: [50, 100],
        datasets: [
          {
            label: player.Player,
            data: [player.fifties, player.hundreds],
            backgroundColor: [player.colour, "rgba(255,98,132,255)"],
          },
        ],
      });
      let thisPlayer = {
        "": "3",
        Player: player.Player,
        Span: "",
        Mat: "445",
        x: "433",
        NO: "18",
        y: "13430",
        HS: player.HS,
        Ave: "32.36",
        BF: "14725",
        SR: player.SR,
        hundreds: "28",
        fifties: "68",
        zeros: "34",
        "Unnamed: 13": "",
      };
      TopScoreData.splice(0, 1, thisPlayer);
      // console.log(TopScoreData);
      setTopScoreData({
        labels: TopScoreData.map((data) => data.Player),
        datasets: [
          {
            label: "Highest Score",
            backgroundColor: ["rgba(160, 208, 246, 255)"],
            data: TopScoreData.map((data) => data.HS),
            backgroundColor: [
              player.colour,
              IndiaColour,
              OtherColour,
              IndiaColour,
              WIColour,
              IndiaColour,
              PakistanColour,
              WIColour,
            ],
            borderColor: "rgba(255,166,80,255)",
          },
          {
            label: "Strike Rate",
            data: TopScoreData.map((data) => data.SR),
            backgroundColor: [
              "rgba(255,0,0,255)",
              "rgba(255,98,132,255)",
              "rgba(255,98,132,255)",
              "rgba(255,98,132,255)",
              "rgba(255,98,132,255)",
              "rgba(255,98,132,255)",
              "rgba(255,98,132,255)",
              "rgba(255,98,132,255)",
            ],
          },
        ],
      });
    }
  };
  const [userData, setUserData] = useState({
    datasets: [
      {
        label: "Indian Players",
        data: IndianPlayers,
        pointRadius: 5,
      },
      {
        label: "Srilankan Players",
        data: SrilankanPlayers,
        pointRadius: 5,
      },
      {
        label: "Australian Players",
        data: AustralianPlayers,
        pointRadius: 5,
      },
      {
        label: "Pakistani Players",
        data: PakistanPlayers,
        pointRadius: 5,
      },
      {
        label: "South African Players",
        data: SAPlayers,
        pointRadius: 5,
      },
      {
        label: "West Indian Players",
        data: WIPlayers,
        pointRadius: 5,
      },
      {
        label: "Other Players",
        data: OtherPlayers,
        pointRadius: 5,
      },
    ],
  });

  return (
    <div>
      <div className="main chart-wrapper">
        <Scatter
          data={userData}
          ref={chartRef}
          onClick={onClick}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Top 50 ODI Batsman of All Time",
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    return `${context.raw.Player} \n Runs Scored: ${context.raw.y} \n Number of Innings: ${context.raw.x} \n Average: ${context.raw.Ave}`;
                  },
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Number of Innings Played",
                },
                suggestedMin: 150,
                suggestedMax: 500,
              },
              y: {
                title: {
                  display: true,
                  text: "Number of Runs Scored",
                },
                suggestedMin: 6000,
                suggestedMax: 20000,
              },
            },
          }}
        />
      </div>
      <div>
        <label>
          <span className="font-link">
            <input
              type="checkbox"
              checked={checked}
              onChange={sizeHandleChange}
            />
            Size reflect average
          </span>
        </label>
      </div>
      <div className="sub chart-wrapper">
        <Bar
          data={barUserData}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Form in last 10 Innings",
              },
              tooltip: {
                callbacks: {
                  title: (context) => {
                    return `${context[0].dataset.label}`;
                    // console.log(context)
                  },
                  label: (context) => {
                    return `Date of Innings: ${context.label} \n Runs Scored: ${context.raw}`;
                  },
                },
              },
            },
            // scales: {
            //   x: {
            //     title: {
            //       display: true,
            //       text: "Date of Match",
            //     },
            //   },
            //   y: {
            //     title: {
            //       display: true,
            //       text: "Number of Runs Scored",
            //     },
            //     // suggestedMin: 0,
            //     // suggestedMax: 20000,
            //   },
            // },
          }}
        />
      </div>
      <div className="sub chart-wrapper">
        <Doughnut
          data={pieUserData}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Conversion Rate",
              },
              tooltip: {
                callbacks: {
                  title: (context) => {
                    return `${context[0].dataset.label}`;
                    // console.log(context[0].dataset);
                  },
                  label: (context) => {
                    // console.log(context);
                    return `Number of ${context.label}s: ${context.raw}`;
                  },
                },
              },
            },
          }}
        />
        <label></label>
      </div>
      <div className="sub chart-wrapper">
        <Bar
          data={topScoreData}
          options={{
            indexAxis: "y",
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Highest Scores and Strike Rate",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default ScatterChart;
