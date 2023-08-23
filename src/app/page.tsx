"use client";
import { PeriodSwitcher } from "@/app/components/PeriodSwitcher";
import styled from "styled-components";
import { BarGraph } from "@/app/components/BarGraph";

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
      <BarGraph />
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
