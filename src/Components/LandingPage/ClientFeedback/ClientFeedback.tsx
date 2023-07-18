import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from "../Images/Review.png";

const ClientFeedback = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      {" "}
      <Hold>
        <Tit>
          What Our Clients Say
          <br /> About Us
        </Tit>
        <Desc>
          {" "}
          Community development is often linked with community work or <br />
          community planning, and may involve stakeholders, foundations,
        </Desc>
      </Hold>
      <CardHolder>
        {/* <Slider {...settings}> */}
        <div>
          <Card>
            <RatingImage src={pic} />
            <Cont>
              Certainty say suffering his him collected intention promotion.
              Hill sold ham men made lose case. Views abode law heard jokes too.
            </Cont>
            <br />

            <UserName>
              <span style={{ color: "gray" }}>Andrew Chris</span>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Client from Uganda
              </span>
            </UserName>
          </Card>
        </div>
        <div>
          <Card>
            <RatingImage src={pic} />
            <Cont>
              Certainty say suffering his him collected intention promotion.
              Hill sold ham men made lose case. Views abode law heard jokes too.
            </Cont>
            <br />

            <UserName>
              <span style={{ color: "gray" }}>Andrew Chris</span>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Client from Uganda
              </span>
            </UserName>
          </Card>
        </div>
        <div>
          <Card>
            <RatingImage src={pic} />
            <Cont>
              Certainty say suffering his him collected intention promotion.
              Hill sold ham men made lose case. Views abode law heard jokes too.
            </Cont>
            <br />

            <UserName>
              <span style={{ color: "gray" }}>Andrew Chris</span>
              <span
                style={{
                  fontWeight: "bold",
                }}
              >
                Client from Uganda
              </span>
            </UserName>
          </Card>
        </div>
        {/* </Slider> */}
      </CardHolder>
    </Container>
  );
};

export default ClientFeedback;

const RatingImage = styled.img`
  margin-bottom: 10px;
`;
const Cont = styled.div``;
const UserName = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const CardHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 0;
    }

    justify-content: flex-start;
    align-items: flex-start;
  }

  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 85%,
    rgba(255, 255, 255, 1) 89%,
    rgba(254, 254, 254, 0.6979166666666667) 100%
  );
`;
const Card = styled.div`
  height: 180px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  margin-right: 20px;

  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  @media screen and (max-width: 600px) {
    /* margin-right: 10; */
    width: 300px;
  }
`;

const Container = styled.div`
  margin-top: 70px;
`;

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
