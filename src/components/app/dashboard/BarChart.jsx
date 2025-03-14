import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const HorizontalBarChart = () => {
  const labels = ["Live Events", "Featured Events", "Private Events"];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [2000, 0, 0],
        backgroundColor: "#2F7EF7",
        label: "Live Events", // Label for the first bar
      },
      {
        data: [0, 4000, 0], // Values for each bar
        backgroundColor: "#85F4FA", // Color for the second bar
        label: "Featured Events", // Label for the second bar
      },
      {
        data: [0, 0, 6000], // Values for each bar
        backgroundColor: "#858FFA", // Color for the third bar
        label: "Private Events", // Label for the third bar
      },
    ],
  };

  const options = {
    tooltips: {
      enabled: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        onClick: null,
        position: "top", // Keep it at the top
        align: "center", // Center horizontally
        labels: {
          usePointStyle: true,
        },
        
      },
    },

    barPercentage: 2.5,
    categoryPercentage: 1.3,
    indexAxis: "y", // Horizontal Bar Chart
  };

  return (
    <div className="bg-[#13131399] mt-3 backdrop-blur-[50px] p-5 h-[350px] relative w-full rounded-[15px] ">
      <h3 className="font-[500] text-[15px] text-white absolute top-6 ">
        Events
      </h3>
      {/* <button className="flex items-center  bg-transparent absolute top-6 right-2 text-[#8A92A6] text-[12px] font-[400] ">
      This Week <MdKeyboardArrowDown size={23} color="white" />{" "}
      </button> */}
      <select
        name=""
        id=""
        className="bg-transparent cursor-pointer text-[#8A92A6] outline-none absolute top-12 right-2 text-[12px] font-[400]"
      >
        <option value="This Week">This Week</option>
      </select>
      <Bar
        data={data}
        options={options}
        className="!w-full"
        plugins={[
          {
            id: "increase-legend-spacing",
            beforeInit(chart) {
              const originalFit = chart.legend.fit;
              chart.legend.fit = function () {
                originalFit.bind(chart.legend)();
                this.height += 40;
              };
            },
          },
        ]}
      />
    </div>
  );
};

export default HorizontalBarChart;
