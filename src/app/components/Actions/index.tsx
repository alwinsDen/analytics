import styled from "styled-components";
import { preContentData } from "@/app/components/Actions/preContent";
import { CardsInterace, IconInterface } from "@/app/components/interfaces";
import { TbBulb } from "react-icons/tb";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

export const Actions = () => {
  const Icons = [
    // eslint-disable-next-line react/jsx-key
    <AiOutlineCaretDown />,
    // eslint-disable-next-line react/jsx-key
    <AiOutlineCaretUp />,
    // eslint-disable-next-line react/jsx-key
    <AiOutlineCaretDown />,
    // eslint-disable-next-line react/jsx-key
    <TbBulb />,
  ];
  const IconBcks = [
    "rgba(254, 30, 0, 0.7)",
    "rgba(77, 255, 84, 1)",
    "rgba(77, 255, 84, 1)",
    "rgba(254, 213, 0, 1)",
  ];
  return (
    <ActionDiv>
      <div className={"textSection"}>
        <div className={"textSectionDiv"}>
          <p className={"mainHeaderT"}>ZooTools AI-powered insights</p>
          <p className={"subHeaderT"}>Making analytics simple and actionable</p>
        </div>
        <button>Ask question</button>
      </div>
      <div className={"gridControl"}>
        {preContentData.map((vls: CardsInterace, index: number) => {
          return (
            <CardsSection key={index}>
              <div className={"mainHeaderC"}>
                <IconStyle background={IconBcks[index]}>
                  {Icons[index]}
                </IconStyle>
                <p>
                  {vls.header}
                  &nbsp;
                  <span>{vls.subHeader}</span>
                </p>
              </div>
              <div className={"subHeaderC"}>
                <p>{vls.subContent}</p>
              </div>
            </CardsSection>
          );
        })}
      </div>
    </ActionDiv>
  );
};
const IconStyle = styled.div<IconInterface>`
  background: ${(props) => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  margin-right: 15px;
  color: #ffffff;
`;
const CardsSection = styled.div`
  height: 150px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  flex: 1 0 calc(50% - 10px);
  .mainHeaderC {
    height: 50%;
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding-left: 24px;
    p {
      font-weight: 600;
      span {
        font-weight: 400;
      }
    }
  }
  .subHeaderC {
    height: 50%;
    display: flex;
    align-items: center;
    background: #f4f4f4;
    padding: 24px;
    font-size: 0.9rem;
  }
`;
const ActionDiv = styled.div`
  background: #ffffff;
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 49px 68px;
  border-radius: 16px;
  margin-top: 60px;
  .gridControl {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .textSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 57px;
    .textSectionDiv {
      .mainHeaderT {
        font-size: 2.6rem;
        font-weight: 700;
      }
      .subHeaderT {
        font-size: 1.3rem;
      }
    }
    button {
      padding: 13px 20px;
      background: none;
      border: 1px solid #959595;
      border-radius: 15px;
      font-size: 1rem;
    }
  }
`;
