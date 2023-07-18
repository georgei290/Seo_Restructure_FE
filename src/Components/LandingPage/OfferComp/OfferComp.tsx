import React from "react";
import styled from "styled-components";
import pic1 from "../Images/ic1.png";
import pic2 from "../Images/ic2.png";
import pic3 from "../Images/ic3.png";
import pic4 from "../Images/ic4.png";
import pic5 from "../Images/ic5.png";
import pic6 from "../Images/ic6.png";

const OfferComp = () => {
  return (
    <Container id="About">
      <Wrapper>
        <Card>
          <IconHold>
            <Icon src={pic1} />
          </IconHold>
          <Title>Community Support</Title>
          <Cont>
            Apps keep work and information right at your fingertips—and Slack
            keeps it all securely.
          </Cont>
        </Card>
        <Card>
          <IconHold>
            <Icon src={pic2} />
          </IconHold>
          <Title>Security First</Title>
          <Cont>
            Connect the tools you already use to get more from them every time
            you work.
          </Cont>
        </Card>
        <Card>
          <IconHold>
            <Icon src={pic3} />
          </IconHold>
          <Title>24/7 Admin Support</Title>
          <Cont>
            You can work with apps in channels, where they’re a seamless part of
            the conver.
          </Cont>
        </Card>
        <Card>
          <IconHold>
            <Icon src={pic4} />
          </IconHold>
          <Title>100+ Themes</Title>
          <Cont>
            Spend less time tracking down the people needed to get work done.
          </Cont>
        </Card>
        <Card>
          <IconHold>
            <Icon src={pic5} />
          </IconHold>
          <Title>Fully Integrated</Title>
          <Cont>
            Skip the follow-ups and back-and -forth. Easily standardize how you
            collect
          </Cont>
        </Card>
        <Card>
          <IconHold>
            <Icon src={pic6} />
          </IconHold>
          <Title>Monthly Update</Title>
          <Cont>
            Take control of your work day. In a just a few minutes, create a
            customized workflow
          </Cont>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default OfferComp;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Icon = styled.img`
  width: 100px;
  object-fit: cover;
  position: absolute;
  top: 0;
  /* margin-top: 70px; */
`;

const IconHold = styled.div`
  height: 35px;
  width: 35px;
  position: relative;
  border-radius: 50%;
  background-color: #eceeff;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Cont = styled.div`
  color: #949494;
`;
const Title = styled.div`
  margin-bottom: 5px;
  color: #3e4581;
`;
const Card = styled.div`
  height: 180px;
  width: 180px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  transition: all 350ms;
  margin: 20px;

  border-radius: 10px;
  background-color: white;
  :hover {
    transform: scale(0.99);
  }

  @media screen and (max-width: 600px) {
    width: 99%;
  }
`;

const Container = styled.div`
  background-color: #fcfcff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
  flex-direction: column;
`;
