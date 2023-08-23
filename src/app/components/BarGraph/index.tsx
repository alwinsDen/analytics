import Chart from "react-apexcharts";
import styled from "styled-components";
import { ChartOptions } from "@/app/components/BarGraph/graphConfiguration";
export const BarGraph = () => {
  return (
    <BarChartDiv>
      <Chart
        height={400}
        options={ChartOptions.options}
        type={"bar"}
        series={ChartOptions.series}
      />
    </BarChartDiv>
  );
};
const BarChartDiv = styled.div`
  background: #ffffff;
  margin-top: 73px;
  padding: 30px 30px;
  box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 11px;
`;
