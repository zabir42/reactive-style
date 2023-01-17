import { useDream } from "../useDream";
import Address from "./portfolio/Address";
import Banner from "./portfolio/Banner";
import Contact from "./portfolio/Contact";
import Footer from "./portfolio/Footer";
import Header from "./portfolio/Header";
import Section_title from "./portfolio/Section_title";
import Services from "./portfolio/Services";

const Layout = () => {
  const menuArr = ["home", "about", "services", "contact", "address"];
  const Dream = useDream()
  
  return (
    <div>
      <Header logo="reactive style" items={menuArr} />

      <Banner
        title="welcome to our world!"
        desc="Occaecat irure deserunt ea proident velit exercitation. Pariatur eu Lorem dolor esse consectetur proident eiusmod. Lorem enim sint ullamco sunt veniam aliqua veniam reprehenderit excepteur ea laboris eiusmod duis. Officia irure voluptate id mollit aliqua exercitation laborum Lorem velit pariatur veniam non. Non quis excepteur nisi cillum ex nisi irure irure mollit. Est velit reprehenderit labore ad eiusmod adipisicing eu culpa ullamco reprehenderit ad aliquip. In culpa labore anim fugiat eu tempor."
      />

      <Section_title
        title="about us"
        desc="Aliqua exercitation velit ut excepteur eiusmod duis eiusmod aute consectetur. Aliqua aliquip ea elit dolore cupidatat pariatur dolore cillum sint aliqua. Enim dolore mollit irure ex aliquip. Ullamco cillum sit incididunt sunt dolor aliquip."
      />

      {/* <About
        title="our mission"
        desc="Est eiusmod ex minim culpa pariatur minim. Commodo quis pariatur et est adipisicing laborum eiusmod ad. Aliquip Lorem laborum commodo aliqua voluptate eiusmod eiusmod aute ipsum aliquip eiusmod nisi in. Sit reprehenderit sit pariatur officia."
        btn_title="read more"
      /> */}
      {Dream}


      <Section_title
        title="our services"
        desc="Dolor ex ad laboris duis amet dolor officia culpa anim ad cupidatat. Labore ex eiusmod laboris enim quis eiusmod consectetur dolor cupidatat Lorem cillum. Sunt irure laboris ipsum non quis enim sit eu voluptate officia ad. Magna esse non magna deserunt voluptate id sit dolore. Enim qui sint do ullamco. Quis ex ut laborum minim laboris consequat dolore occaecat laboris dolore nostrud officia aliquip aliquip."
      />
      <Services
        title="web design"
        desc="Laboris eiusmod consequat culpa ex Lorem duis mollit minim laboris incididunt enim. Labore aliqua ex magna esse consequat. Sint Lorem sint nulla sint Lorem ad laboris adipisicing fugiat mollit officia in. "
      />

      <Section_title
        title="contact us"
        desc="Reprehenderit voluptate exercitation velit nisi nulla in id irure fugiat. Labore sint elit incididunt non ex id. Labore aute ea commodo in fugiat aliquip officia ea minim. Ea tempor aliqua laborum est dolor in sint ipsum occaecat incididunt labore adipisicing aliquip ad."
      />
      <Address address="phone" add_info="01781079305" />

      <Contact />

      <Footer text="&copy; 2023 all right reserved" />
    </div>
  );
};

export default Layout;
