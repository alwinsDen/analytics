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
  box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.1);
  padding: 30px 71px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .mainHeader {
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 700;
  }

  table {
    width: 100%;
    margin-top: 30px;

    tr {
      td {
        padding-bottom: 35px;
        font-size: 0.9rem;
      }
    }
  }
`;
