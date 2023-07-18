import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const EmptyKeyWord = () => {
  return (
    <Wrapper>
      <TopInputData>
        <Title>Keyword Data</Title>
        <SubTitle>
          Keyword Data Explorer will help you appreciate the scale of
          information that Domranker Keyword provides.
        </SubTitle>
        <InputsHold>
          <DropdownHolds>
            <FunctionsSelect>
              <label>Functions</label>
              <select>
                <option>Summary</option>
                <option>Function 2</option>
                <option>Function 3</option>
                <option>Function 4</option>
                <option>Function 5</option>
                <option>Function 6</option>
              </select>
            </FunctionsSelect>
            <FunctionsSelect>
              <label>Include Subdomains</label>
              <select>
                <option>Enable</option>
                <option>Function 2</option>
                <option>Function 3</option>
                <option>Function 4</option>
                <option>Function 5</option>
                <option>Function 6</option>
              </select>
            </FunctionsSelect>
            <FunctionsSelect>
              <label>Backlink Status Type</label>
              <select>
                <option>Live</option>
                <option>Function 2</option>
                <option>Function 3</option>
                <option>Function 4</option>
                <option>Function 5</option>
                <option>Function 6</option>
              </select>
            </FunctionsSelect>
            <FunctionsSelect>
              <label>Internal List Limit</label>
              <select>
                <option>10</option>
                <option>Function 2</option>
                <option>Function 3</option>
                <option>Function 4</option>
                <option>Function 5</option>
                <option>Function 6</option>
              </select>
            </FunctionsSelect>
          </DropdownHolds>

          <SearchBarHold>
            <Label>
              <label>Keyword</label>
            </Label>
            <SearchBar>
              <SearchIcon>
                <FiSearch size="20px" color="gray" />
              </SearchIcon>
              <input type="search" placeholder="Enter Your Keyword..." />
              <button>Analyse</button>
            </SearchBar>
          </SearchBarHold>
        </InputsHold>
      </TopInputData>
      <hr />
      <BottomEmptyData>
        <ImageDiv>
          <img src="/image/keypoint.svg" alt="" />
        </ImageDiv>
        <Desc>
          This endpoint will provide you with search volume, monthly searches,
          competition, and other related data for up to 1000 keywords in a
          single request.
        </Desc>
      </BottomEmptyData>
    </Wrapper>
  );
};

export default EmptyKeyWord;

const Wrapper = styled.div`
  hr {
    border: none;
    height: 1px;
    background-color: #e2e2e2;
  }
`;
const TopInputData = styled.div``;

const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
`;
const SubTitle = styled.div`
  font-size: 12px;
`;
const InputsHold = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DropdownHolds = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;
const FunctionsSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  select {
    height: 35px;
    width: 250px;
    font-family: montserrat;
    border: 1px solid #dddddd;
    color: #3e4581;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }
  label {
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 3px;
  }

  @media (max-width: 500px) {
    select {
      height: 40px;
      width: 100px;
      font-size: 12px;
    }
  }
`;
const SearchBar = styled.div`
  width: 98%;
  height: 35px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  align-items: center;
  border: 1px solid #dddddd;
  padding: 0 3px 0 8px;
  @media (max-width: 450px) {
    width: 95%;
  }

  input {
    height: 100%;
    width: 100%;
    font-family: Montserrat;
    outline: none;
    border: none;
    background-color: transparent;
  }
  button {
    height: 90%;
    width: 200px;
    border-radius: 3px;
    font-family: Montserrat;
    background-color: #4285f4;
    color: #fff;
    font-weight: bold;
    border: none;
    outline: none;
    transition: 350ms;
    cursor: pointer;
    :hover {
      transform: scale(0.96);
    }
  }
`;

const SearchIcon = styled.div`
  height: 20px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  padding-top: 15px;
`;

const SearchBarHold = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  width: 99%;
  /* background-color: red; */

  label {
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 3px;
  }
`;
const BottomEmptyData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const ImageDiv = styled.div`
  margin: 15px 0;
  img {
    width: 250px;
  }
`;
const Desc = styled.div`
  width: 700px;
  text-align: center;
  font-size: 13px;

  @media (max-width: 700px) {
    width: 80%;
  }
`;
