import styled from "styled-components";

export const PeriodSwitcher = () => {
  const hrs = [1, 24, 30, 60];
  return (
    <PeriodMainDiv>
      {hrs.map((vls: number, index: number) => {
        return <PeriodButton key={index}>{vls}hr</PeriodButton>;
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
`;
