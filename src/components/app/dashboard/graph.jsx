import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,
  scales: {
    y: {
      stacked: true,
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const generateRandomData = (min, max, length) => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const createGradient = (ctx, color1, color2) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 700);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(0.38, color2);
  return gradient;
};

export const data = {
  labels,
  datasets: [
    {
      label: "Selected Year",
      backgroundColor: (context) =>
        createGradient(
          context.chart.ctx,
          "rgba(47, 126, 247, 0.4)",
          "rgba(47, 126, 247, 0)"
        ),
      data: generateRandomData(0, 1000, labels.length),
      borderColor: "rgb(53, 162, 235)",
      tension: 0.4,
      fill: true,
    },
    {
      label: "Previous Year",
      data: generateRandomData(0, 1000, labels.length),
      backgroundColor: (context) =>
        createGradient(
          context.chart.ctx,
          "rgba(133, 197, 250, 0.2)",
          "rgba(133, 217, 250, 0)"
        ),
      borderColor: "rgb(53, 162, 235)",
      tension: 0.4,
      fill: true,
    },
  ],
};

export function LineGraph() {
  return (
    <div className="bg-[#13131399] mt-3 backdrop-blur-[50px] pt-0 p-5 h-[350px] relative rounded-[15px] ">
      <h3 className="font-[500] text-[15px] text-white absolute top-12 ">
        Users
      </h3>
      {/* <button className="flex items-center  bg-transparent absolute top-12 right-2 text-[#8A92A6] text-[12px] font-[400] ">
        2024 <MdKeyboardArrowDown size={23} color="white" />{" "}
      </button> */}
      <select name="" id="" className="bg-transparent cursor-pointer text-[#8A92A6] outline-none absolute top-12 right-2 text-[12px] font-[400]">
        <option value="2024">2024</option>
      </select>
      <Line
        options={options}
        data={data}
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
}
