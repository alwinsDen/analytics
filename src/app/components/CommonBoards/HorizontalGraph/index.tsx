import Chart from "react-apexcharts";
import styled from "styled-components";
import { LabelMeasureGraphs } from "@/app/components/interfaces";

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
      top: 40px;
      left: 40px;
      z-index: 1;
      font-size: 26px;
      font-style: normal;
      font-weight: 300;
      display: flex;
      flex-direction: column;
      gap: ${props.gap}px;
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
              <p>{props.series[index]}</p>
            </div>
          );
        })}
      </div>
      <Chart
        width={"100%"}
        type={"bar"}
        height={350}
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
              borderRadius: 4,
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
