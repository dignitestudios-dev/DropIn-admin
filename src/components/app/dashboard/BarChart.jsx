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

const HorizontalBarChart = ({eGraphData}) => {
  const labels = ["Live Events", "Featured Events", "Private Events"];
console.log(eGraphData,"eGraphData")
const data = {
  labels: ["Events"], 
   // only one group on Y-axis
  datasets: [
    {
      label: "Live Events",
      data: [eGraphData?.liveCount || 0],
      backgroundColor: "#2F7EF7",
      barThickness: 50,
    },
    {
      label: "Featured Events",
      data: [eGraphData?.featuredCount || 0],
      backgroundColor: "#85F4FA",
      barThickness: 50,
    },
    {
      label: "Private Events",
      data: [eGraphData?.privateCount || 0],
      backgroundColor: "#858FFA",
      barThickness: 50,
    },
  ],
};

  const options = {
    indexAxis: "y", // Horizontal bars
    responsive: true,
      maintainAspectRatio: false,
      
    plugins: {
      legend: {
        position: "top",
          align: "center",
        labels: {
          usePointStyle: true ,
        },
      },
    },
    scales: {
      x: {
        stacked: false,
        // spacing between categories (rows)
        ticks: {
          gap: 10,
          padding: 5, // increases gap between rows
          font: {
            size: 14,
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-[#13131399] mt-3 backdrop-blur-[50px] p-5 h-[350px] relative w-full rounded-[15px] ">
      <h3 className="font-[500] text-[15px] text-white absolute top-6 ">
        Events
      </h3>
      {/* <button className="flex items-center  bg-transparent absolute top-6 right-2 text-[#8A92A6] text-[12px] font-[400] ">
      This Week <MdKeyboardArrowDown size={23} color="white" />{" "}
      </button> */}
      <div
        name=""
        id=""
        className="bg-transparent  text-[#8A92A6] outline-none absolute top-12 right-2 text-[12px] font-[400]"
      >
        This Week
      </div>
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
