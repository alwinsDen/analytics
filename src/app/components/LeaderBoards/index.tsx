import styled from "styled-components";
import { TableData } from "@/app/components/Actions/preContent";
import { TableDataInterface } from "@/app/components/interfaces";
import { GreyClicker } from "@/app/components/CommonComps";
export const LeaderBoards = () => {
  return (
    <LeaderBoardDiv>
      <p className={"mainHeader"}>User Scoreboard</p>
      <table>
        <tr>
          <td>Email</td>
          <td>Friends invited</td>
          <td>Country</td>
        </tr>
        {TableData.map((vls: TableDataInterface, index: number) => {
          return (
            <tr key={index}>
              <td>{vls.email}</td>
              <td>{vls.invited}</td>
              <td>{vls.country}</td>
            </tr>
          );
        })}
      </table>
      <GreyClicker text={"See leaderboards"} />
    </LeaderBoardDiv>
  );
};
const LeaderBoardDiv = styled.div`
  width: 48%;
  border-radius: 16px;
  background: #fff;
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 30px 71px;

  .mainHeader {
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
  }

  table {
    width: 100%;
    margin-top: 30px;

    tr {
      td {
        padding-bottom: 20px;
      }
    }
  }
`;
