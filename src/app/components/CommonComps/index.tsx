import styled from "styled-components";

export const GreyClicker = () => {
  return <GreyClickerDiv>See leaderboard</GreyClickerDiv>;
};
const GreyClickerDiv = styled.button`
  border-radius: 8px;
  background: #f2f2f2;
  padding: 10px;
  box-shadow: none;
  appearance: none;
  border: none;
  margin: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  text-align: inherit;
`;
