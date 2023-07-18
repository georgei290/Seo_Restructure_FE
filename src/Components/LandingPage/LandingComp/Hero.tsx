import styled from "styled-components";
import heroPic from "../Images/Herocontent.png";
import pic1 from "../Images/Group 542.png";
import pic2 from "../Images/Group 543.png";
import pic3 from "../Images/Group 544.png";
import pic4 from "../Images/Group 545.png";
import pic5 from "../Images/Group 546.png";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";

const Hero = () => {
  
  return (
    <Container id="Home">
      <Wrapper>
        <First>
          <Title>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter: any) => {
                typewriter

                  .typeString("UPSCALE YOUR WEBPAGE...")
                  .pauseFor(1000)
                  .deleteAll()

                  .start()
                  .typeString("GET THE BEST RANKING...")
                  .pauseFor(1000)
                  .deleteAll()

                  .start()
                  .typeString("GET YOUR KEYWORD NOTICED...")
                  .pauseFor(1000)
                  .deleteAll()

                  .start()
                  .typeString("ADD BACKLINK TO YOUR WEBSITE...");
              }}
            />
          </Title>
          <Cont>
            Compliance with search engine guidelines is an important factor for
            the success of your website. The SEO Checker analyzes your website
            and gives you tips on optimizing your site for a long-term success
            in search engine optimization!
          </Cont>
          <ButtonHold>
            <NavLink to="/signup">
              <MyButton>Get Started</MyButton>
            </NavLink>
            <MyButton2>Contact Us</MyButton2>
          </ButtonHold>
        </First>
        <Second>
          <HeroImage src={heroPic} />
        </Second>
      </Wrapper>

      <Supporers>
        <SupImage src={pic1} />
        <SupImage src={pic2} />
        <SupImage src={pic3} />
        <SupImage src={pic4} />
        <SupImage src={pic5} />
      </Supporers>
      <br />
      <br />
      <Hold>
        <Tit>What we Offer?</Tit>
        <Desc>
          {" "}
          in virtual space through communication platforms. Durable relations
          that
          <br /> extend beyond immediate genealogical ties.
        </Desc>
      </Hold>
    </Container>
  );
};

export default Hero;

const Hold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
	margin-bottom: 30px;
`;

const Tit = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: #ae67fa;
	margin-bottom: 10px;

	@media screen and (max-width: 600px) {
		font-size: 25px;
	}
`;
const Desc = styled.div`
	color: #3e4581;

	@media screen and (min-width: 300px) and (max-width: 500px) {
		width: 97%;
	}
`;

const SupImage = styled.img`
	width: 120px;

	margin-right: 30px;
	margin-left: 30px;

	@media screen and (max-width: 960px) {
		width: 70px;
	}
`;
const Supporers = styled.div`
	/* margin-top: 50px; */
	display: flex;
	overflow-x: scroll;
	justify-content: center;
	align-items: center;
	width: 100%;
	::-webkit-scrollbar {
		width: 0;
	}
	@media screen and (max-width: 980px) {
		justify-content: flex-start;
		align-items: flex-start;
		margin-top: 30px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
	background-color: #f8f8ff;

	@media screen and (max-width: 1300px) {
		flex-wrap: wrap;
		flex-direction: column-reverse;
	}
`;

const HeroImage = styled.img``;

const First = styled.div`
	margin-left: 70px;

	@media screen and (max-width: 960px) {
		margin-left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		width: 100%;
	}
`;
const Second = styled.div`
	margin-right: 70px;

	@media screen and (max-width: 1300px) {
		width: 100%;
		margin-right: 0;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
`;
const Cont = styled.div`
	width: 500px;
	color: #3e4581;

	@media screen and (max-width: 960px) {
		width: 90%;
	}
`;
const Title = styled.h1`
	font-size: 45px;
	color: #ae67fa;
	font-weight: bolder;
	min-height: 70px;
	margin-bottom: 7px;
	max-width: 500px;

	@media screen and (max-width: 790px) {
		font-size: 35px;
		max-width: 95%;
	}
`;

const MyButton2 = styled.button`
	width: 180px;
	height: 40px;
	border: none;
	outline: none;
	color: #f1966e;
	border: 1px solid #f1966e;
	border-radius: 5px;
	transition: all 350ms;
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	cursor: pointer;
	margin-right: 20px;
	background-color: transparent;

	@media screen and (max-width: 600px) {
		width: 150px;
	}

	:hover {
		transform: scale(0.98);
	}
`;
const MyButton = styled.button`
	width: 180px;
	height: 40px;
	border: none;
	outline: none;
	color: white;
	background-color: #ae67fa;
	border-radius: 5px;
	transition: all 350ms;
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	cursor: pointer;
	margin-right: 20px;

	:hover {
		transform: scale(0.98);
	}

	@media screen and (max-width: 600px) {
		width: 150px;
	}
`;
const ButtonHold = styled.div`
	width: 100%;
	margin-top: 20px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
	background-color: #f8f8ff;
	flex-direction: column;

	@media screen and (max-width: 1300px) {
	}
	/* align-items: center; */
`;
