import Chart from "react-apexcharts";
import styled from "styled-components";

export const HorizontalGraph = (props: {
  series: number[];
  labelJSX: JSX.Element[];
  gap: number;
}) => {
  const HorizontalGraphDiv = styled.div`
    width: 100%;
    margin-left: -25px;
    margin-top: -25px;
    margin-bottom: -25px;
    position: relative;
    .labelTextDiv {
      position: absolute;
      padding-top: 40px;
      padding-bottom: 40px;
      padding-left: 40px;
      z-index: 1;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 300;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      .onChartLabel {
        display: flex;
        justify-content: space-between;
      }
    }
  `;
  return (
    <HorizontalGraphDiv>
      <div className={"labelTextDiv"}>
        {props.labelJSX.map((vls, index: number) => {
          return (
            <div key={index} className={"onChartLabel"}>
              {vls}
              <p>{props.series[index].toLocaleString("en-US")}</p>
            </div>
          );
        })}
      </div>
      <Chart
        width={"100%"}
        type={"bar"}
        height={"350px"}
        series={[
          {
            data: props.series,
          },
        ]}
        options={{
          chart: {
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              horizontal: true,
            },
          },
          colors: ["#FFF5C2"],
          yaxis: {
            labels: {
              show: false,
            },
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
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
            },
            axisTicks: {
              show: false,
            },
          },
        }}
      />
    </HorizontalGraphDiv>
  );
};
