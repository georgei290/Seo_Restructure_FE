import React from 'react'
import styled from 'styled-components'

const TimmingCard = () => {
  return (
    <Container>

            <Line>

            </Line>
            <DataCon>
            <span>Download time</span>
				<div>43</div>
            </DataCon>

    </Container>
  )
}

export default TimmingCard


const DataCon = styled('div')`
flex: 1;    
height:100%;
background-color:white;
display: flex;
flex-direction: column;

span{
	padding-left:10px;
	padding-top:10px;
	padding-bottom:16px;
	font-weight:700;
	font-size:13px;
};

div{
	padding-left:10px;
	
	font-weight:800;
	font-size:25px;
}

`


const Line = styled.div`
width: 5px;
height: 100%;
background-color:#AE67FA;
`

const  Container = styled('div')`
 width:310px;
 height:90px;
 border-radius2px;
 border:2px solid #CCCCCC;
 display: flex;
 margin-right:5px;
margin-bottom:5px;

 @media screen and (max-width: 768px) {
    width:100%;
    margin-right:0px;
 }

`