import React from 'react'
import styled from 'styled-components'

interface iData{
    title:string,
    subtitle : string,
}

const  Mysimple:React.FC<iData> = ({title, subtitle}) =>{
  return (
    <Main>
      <Title>{title}</Title>
      <MainTitle>{subtitle}</MainTitle>
    </Main>
  )
}

export default Mysimple



const Title = styled.div`
  font-weight: 600;
`;

const MainTitle = styled.div`
  font-weight: 800;
  font-size: 25px;
  margin-top: 8px;
`;

const Main = styled.div`
  width: 335px;
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8px;
  margin-left:0px;

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;
