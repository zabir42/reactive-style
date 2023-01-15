import About from "./About";
import Address from "./Address";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";

const Layout = () => {
  return (
    <div>
      <Header />

      <Banner />

      <About />

      <Services />

      <Address />

      <Contact />

      <Footer text={
        <p>&copy; 2023 all right reserved</p>
      } />
    </div>
  );
};

export default Layout;
