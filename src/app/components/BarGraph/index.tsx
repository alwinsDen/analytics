import Chart from "react-apexcharts";
import styled from "styled-components";
import {
  ChartOptions,
  ChartSeries,
} from "@/app/components/BarGraph/graphConfiguration";
import { FiUsers } from "react-icons/fi";
export const BarGraph = () => {
  return (
    <BarChartDiv id={"mainChart"}>
      <div className={"metricMeterDiv"}>
        <div className={"metricMeter"}>
          <p>100,000</p>
          <FiUsers size={40} />
        </div>
        <p className={"metricSub"}>Participants</p>
      </div>
      <Chart
        height={400}
        options={ChartOptions}
        type={"bar"}
        series={ChartSeries}
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
  position: relative;
  .metricMeterDiv {
    position: absolute;
    z-index: 1;
    .metricMeter {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 64px;
      font-weight: 700;
    }
    .metricSub {
      font-size: 40px;
    }
  }
`;
