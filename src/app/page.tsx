"use client";
import { PeriodSwitcher } from "@/app/components/PeriodSwitcher";
import styled from "styled-components";
import { BarGraph } from "@/app/components/BarGraph";
import { Actions } from "@/app/components/Actions";

export default function Home() {
  return (
    <MainPageDiv>
      <div className={"headerComp"}>
        <p
          style={{
            fontSize: "48px",
            fontWeight: 700,
          }}
        >
          Summer referral competition
        </p>
        <PeriodSwitcher />
      </div>
      {/*bar graph component*/}
      <BarGraph />
      {/*Zootools features*/}
      <Actions />
      <div></div>
    </MainPageDiv>
  );
}
const MainPageDiv = styled.div`
  background: #f9fafb;
  padding: 75px 175px;
  .headerComp {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
