import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Section1 from "../components/section1/Section1";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3";
import Section4 from "../components/section4/Section4";

const Index = (): JSX.Element => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
};

export default Index;
