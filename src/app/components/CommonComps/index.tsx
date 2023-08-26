import styled from "styled-components";

export const GreyClicker = (props: { text: string }) => {
  return <GreyClickerDiv>{props.text}</GreyClickerDiv>;
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
  color: inherit;
  text-align: inherit;
  width: max-content;
  font-size: 0.9rem;
`;
