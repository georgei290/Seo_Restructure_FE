import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { congrateCall } from "../../utils/APICalls";

const CongrateComponent = () => {
  const { id } = useParams();
  useEffect(() => {
    congrateCall(id!);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Text>
          <span>Finally you're done!!!</span>
        </Text>
        <TextDecs>
          <span>Sign in to interact with your account</span>
        </TextDecs>

        <SocialCon>
          <div>
            Your account has been verified!
            <br />
            <br />
            Please goto sign in now....!
            <br />
            <br />
            Thanks
          </div>
        </SocialCon>
      </Wrapper>
    </Container>
  );
};

export default CongrateComponent;

const SocialCon = styled("div")`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 90%;
  /* height: 40px; */
  background-color: #e8eaff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  div {
  }
  padding: 20px;
`;

const TextDecs = styled("div")`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 15px;
    font-weight: 700;
    color: #000000;
  }
`;

const Text = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 900;
    color: #ae67fa;
    font-size: 30px;
    /* font-family: Imported; */
  }
`;

const Container = styled("div")`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 400px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
