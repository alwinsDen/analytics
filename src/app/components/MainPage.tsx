import styled from "styled-components";
import { PeriodSwitcher } from "@/app/components/PeriodSwitcher";
import { BarGraph } from "@/app/components/BarGraph";
import { Actions } from "@/app/components/Actions";
import { LeaderBoards } from "@/app/components/LeaderBoards";
import { CommonBoards } from "@/app/components/CommonBoards";

const MainPage = () => {
  return (
    <MainPageDiv>
      <div className={"headerComp"}>
        <p
          style={{
            fontSize: "2em",
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
          gap={1.25}
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
          gap={1.05}
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
          gap={1.05}
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
};
const MainPageDiv = styled.div`
  background: #f9fafb;
  padding: 40px 100px;

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
export default MainPage;
