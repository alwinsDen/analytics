export const ChartOptions = {
  series: [
    {
      data: [
        50, 100, 150, 200, 150, 100, 50, 100, 150, 200, 250, 300, 350, 400, 450,
        500, 550, 600, 600, 700, 750, 800, 850, 900, 1000, 700, 500, 300, 200,
        100, 50,
      ],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      dataPointSelection: {
        enabled: false,
      },
    },
    colors: ["#FED500"],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    toolbar: {
      show: false,
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
  },
};
