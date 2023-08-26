"use client";
import { PeriodSwitcher } from "@/app/components/PeriodSwitcher";
import styled from "styled-components";
import { BarGraph } from "@/app/components/BarGraph";
import { Actions } from "@/app/components/Actions";
import { LeaderBoards } from "@/app/components/LeaderBoards";
import { CommonBoards } from "@/app/components/CommonBoards";

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
      <div className={"alignTables"}>
        <LeaderBoards />
        <CommonBoards
          mainHeader={"Traffic "}
          expandContent={"See traffic sources"}
          buttonArray={["Source", "City"]}
          gap={20}
          graphContent={{
            series: [30000, 20000, 10000, 5000, 3000, 2000],
            labelJSX: [
              // eslint-disable-next-line react/jsx-key
              <p>Google</p>,
              // eslint-disable-next-line react/jsx-key
              <p>Twitter</p>,
              // eslint-disable-next-line react/jsx-key
              <p>Facebook</p>,
              // eslint-disable-next-line react/jsx-key
              <p>LinkedIn</p>,
              // eslint-disable-next-line react/jsx-key
              <p>YouTube</p>,
              // eslint-disable-next-line react/jsx-key
              <p>Other</p>,
            ],
          }}
        />
      </div>
      <div className={"alignTables"}>
        <CommonBoards
          mainHeader={"Signup location"}
          expandContent={"See all countries"}
          buttonArray={["Country", "City"]}
          gap={16.5}
          graphContent={{
            series: [30000, 20000, 10000, 5000, 3000, 2000],
            labelJSX: [
              // eslint-disable-next-line react/jsx-key
              <p>🇺🇸 United states</p>,
              // eslint-disable-next-line react/jsx-key
              <p>🇩🇪 Germany</p>,
              // eslint-disable-next-line react/jsx-key
              <p>🇳🇱 Netherlands</p>,
              // eslint-disable-next-line react/jsx-key
              <p>🇮🇳 India</p>,
              // eslint-disable-next-line react/jsx-key
              <p>🇯🇵 Japan</p>,
              // eslint-disable-next-line react/jsx-key
              <p>🌎 Other</p>,
            ],
          }}
        />
        <CommonBoards
          mainHeader={"Behaviour"}
          expandContent={"See all countries"}
          buttonArray={["Browsers", "Decides"]}
          gap={16.5}
          graphContent={{
            series: [30000, 20000, 10000, 5000, 3000, 2000],
            labelJSX: [
              // eslint-disable-next-line react/jsx-key
              <p>🇺🇸 United states</p>,
              // eslint-disable-next-line react/jsx-key
              <p>🇩🇪 Germany</p>,
              // eslint-disable-next-line react/jsx-key
              <p>🇳🇱 Netherlands</p>,
              // eslint-disable-next-line react/jsx-key
              <p>🇮🇳 India</p>,
              // eslint-disable-next-line react/jsx-key
              <p>🇯🇵 Japan</p>,
              // eslint-disable-next-line react/jsx-key
              <p>🌎 Other</p>,
            ],
          }}
        />
      </div>
    </MainPageDiv>
  );
}
const MainPageDiv = styled.div`
  background: #f9fafb;
  padding: 75px 20px;
  .headerComp {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .alignTables {
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
  }
`;
