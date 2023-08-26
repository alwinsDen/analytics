import { ApexOptions } from "apexcharts";

export const ChartSeries = [
  {
    data: [
      50, 100, 150, 200, 150, 100, 50, 100, 150, 200, 250, 300, 350, 400, 450,
      500, 550, 600, 600, 700, 750, 800, 850, 900, 1000, 700, 500, 300, 200,
      100, 50,
    ],
  },
];
export const ChartOptions: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
      const xPosition = w.globals.seriesX[seriesIndex][dataPointIndex];
      return `
        <div class="arrow_style" style="display:flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    background: #ffffff;
                    padding: 15px 30px;
                    box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.25);
                    position: relative;
                    border-radius: 1em;
                    gap: 10px;
                    transform: translateY(-70%) translateX(${
                      xPosition != null && xPosition > 26 ? 50 : -50
                    }%);"
        >
          <div style="display: flex;font-size: 1.3em">
            <p style="font-weight: 700">${
              series[seriesIndex][dataPointIndex]
            }</p>
            <p>&nbsp;Signups</p>
          </div>
          <p style="color:#909090;font-size: 1em;gap: 10px">Current week</p>
        </div>
      `;
    },
  },
  colors: ["#FED500"],
  plotOptions: {
    bar: {
      columnWidth: "20px",
      distributed: true,
      borderRadius: 10,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
      show: false,
    },
    tickAmount: 8,
  },
  grid: {
    borderColor: "#E6E6E6",
    strokeDashArray: 3,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
    labels: {
      show: false,
      style: {
        colors: ["red"],
        fontSize: "12px",
      },
    },
  },
};
