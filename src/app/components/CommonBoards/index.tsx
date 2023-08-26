import styled from "styled-components";
import { TableData } from "@/app/components/Actions/preContent";
import {
  LabelMeasureGraphs,
  TableDataInterface,
} from "@/app/components/interfaces";
import { GreyClicker } from "@/app/components/CommonComps";
import { HorizontalGraph } from "@/app/components/CommonBoards/HorizontalGraph";

export const CommonBoards = (props: LabelMeasureGraphs) => {
  return (
    <CommonBoardsDiv>
      <div className={"headerControls"}>
        <p className={"mainHeader"}>{props.mainHeader}</p>
        <div>
          <GreyClicker text={`${props.buttonArray[0]}`} />
          <p>{props.buttonArray[1]} </p>
        </div>
      </div>
      <HorizontalGraph {...props.graphContent} gap={props.gap} />
      <GreyClicker text={`${props.expandContent}`} />
    </CommonBoardsDiv>
  );
};
const CommonBoardsDiv = styled.div`
  width: 48%;
  border-radius: 16px;
  background: #fff;
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 30px 71px;

  .headerControls {
    display: flex;
    justify-content: space-between;

    .mainHeader {
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
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
