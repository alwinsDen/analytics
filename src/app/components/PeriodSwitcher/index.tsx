import styled from "styled-components";
import { useState } from "react";

export const PeriodSwitcher = () => {
  const hrs = [1, 24, 30, 60];
  const [currSelect, setCurrString] = useState<string>();
  return (
    <PeriodMainDiv>
      {hrs.map((vls: number, index: number) => {
        return (
          <PeriodButton
            key={index}
            onClick={() => {
              setCurrString(vls.toString());
            }}
            style={{
              background: currSelect === vls.toString() ? "#E2E3E8" : "",
            }}
          >
            {vls}d
          </PeriodButton>
        );
      })}
    </PeriodMainDiv>
  );
};
const PeriodMainDiv = styled.div`
  background: #ffffff;
  border-radius: 11px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: max-content;
  display: flex;
  gap: 17px;
  padding: 11px 10px;
`;
const PeriodButton = styled.button`
  background: #f8f9fa;
  font-size: 1.2em;
  color: #646a75;
  padding: 11px 18px;
  border-radius: 11px;
  border: none;
  cursor: pointer;
  transition-duration: 1s;

  &:hover {
    background: #e2e3e8;
  }
`;
