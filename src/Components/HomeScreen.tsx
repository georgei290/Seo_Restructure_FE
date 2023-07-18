import MetaComponents from "../utils/MetaComponents";
import ClientFeedback from "./LandingPage/ClientFeedback/ClientFeedback";
import Footer from "./LandingPage/Footer/Footer";
import HowItWork from "./LandingPage/HowItWork/HowItWork";
import Hero from "./LandingPage/LandingComp/Hero";
import OfferComp from "./LandingPage/OfferComp/OfferComp";
import Plans from "./LandingPage/Plans/Plans";
import StartPro from "./LandingPage/StartPro/StartPro";

const Homescreen = () => {
  return (
    <>
      <MetaComponents
        content="Give your brand or hobby a search space in search Engines!"
        title="Landing Page"
        path="/"
      />
      <div style={{ overflow: "hidden" }}>
        <Hero />
        <OfferComp />
        <HowItWork />
        <Plans />
        <ClientFeedback />
        <StartPro />
        <Footer />
      </div>
    </>
  );
};

export default Homescreen;
