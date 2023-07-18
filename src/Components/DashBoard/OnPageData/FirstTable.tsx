import React from "react";
import styled from "styled-components";
import { HashData } from "./FirstContent";

const FirstTable = () => {
  return (
    <>
      <HoldTable>
        <Table>
          <Headrow>
            <TheadCT>#</TheadCT>

            <Thead>htags[h1]</Thead>
          </Headrow>

          {HashData.map((props) => (
            <ContentRow>
              <ContentData>
                <MainData1>
                  <a>{props.hashTags}</a>
                </MainData1>
              </ContentData>

              <ContentDataTV>
                <MainData>{props.con}</MainData>
              </ContentDataTV>
            </ContentRow>
          ))}
        </Table>
      </HoldTable>
    </>
  );
};

export default FirstTable;

const MainData1 = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  align-items: center;
`;

const MainData = styled.div`
  width: 100%;

  height: 40px;
  display: flex;
  padding-left: 10px;
`;

const TheadCT = styled.th`
  width: auto;
  height: 50%;
  padding-left: 10px;
  padding-right: 20px;
  border-right: 2px solid #e2e2e2;
`;
const TheadL = styled.th`
  padding-left: 10px;
  padding-right: 848px;
  border-right: 2px solid #e2e2e2;
`;
const Thead = styled.th`
  padding-left: 10px;
  padding-right: 95%;
`;

const ContentDataTV = styled.td`
  width: 850px;
  height: 45px;
`;
const ContentData = styled.td`
  width: 20px;
  height: 45px;
  border-right: 2px solid #e2e2e2;
  padding-left: 10px;
`;
const ContentRow = styled.tr`
  flex: 1;
  :nth-child(even) {
    background-color: #fafafc;
  }
`;

const Headrow = styled.tr`
  height: 40px;
`;

const Table = styled.table`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;
const HoldTable = styled.div`
  overflow-x: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
