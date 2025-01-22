import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Guide from "./components/Guide";
import Hero from "./components/Hero";
import MoreDetail from "./components/MoreDetail";
import Properties from "./components/Properties";
// import Reviews from "./components/Reviews";

const LandingPage = () => {
  return (
    <>
      <Hero />
      {/* <Reviews /> */}
      <Guide />
      <Properties />
      <MoreDetail />
      <Featured />
      <Footer />
    </>
  );
};

export default LandingPage;
