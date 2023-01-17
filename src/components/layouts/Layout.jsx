import { useAbout } from "../hooks/useAbout";
import { useAddress } from "../hooks/useAddress";
import { useServices } from "../hooks/useServices";
import Banner from "./portfolio/Banner";
import Contact from "./portfolio/Contact";
import Footer from "./portfolio/Footer";
import Header from "./portfolio/Header";
import Section_title from "./portfolio/Section_title";

const Layout = () => {
  const menuArr = ["home", "about", "services", "contact", "address"];
  const About = useAbout([
    {
      title: "our mission",
      desc: "Esse ut nulla Lorem veniam culpa deserunt tempor nostrud elit elit. Cupidatat ut ex proident labore occaecat duis ad duis culpa ex elit. Veniam laboris consectetur amet in.",
      btn_title: "read more",
    },
    {
      title: "our vission",
      desc: "Tempor veniam amet incididunt cupidatat officia do enim amet. Aute nulla anim labore eiusmod laboris adipisicing non commodo pariatur ipsum amet laborum nostrud nostrud. ",
      btn_title: "read more",
    },
    {
      title: "our destiny",
      desc: "Tempor veniam amet incididunt cupidatat officia do enim amet. Aute nulla anim labore eiusmod laboris adipisicing non commodo pariatur ipsum amet laborum nostrud nostrud. ",
      btn_title: "read more",
    },
  ]);

  const Service = useServices([
    {
      title: "web design",
      desc: "In consequat eu consectetur ullamco aliqua id nulla reprehenderit ex labore. Est reprehenderit sint minim exercitation ad exercitation deserunt pariatur sit consequat laborum Lorem occaecat laborum. Et in quis culpa velit pariatur dolor ullamco culpa labore cupidatat.",
    },
    {
      title: "web devlopement",
      desc: "In consequat eu consectetur ullamco aliqua id nulla reprehenderit ex labore. Est reprehenderit sint minim exercitation ad exercitation deserunt pariatur sit consequat laborum Lorem occaecat laborum. Et in quis culpa velit pariatur dolor ullamco culpa labore cupidatat.",
    },
    {
      title: "web application",
      desc: "In consequat eu consectetur ullamco aliqua id nulla reprehenderit ex labore. Est reprehenderit sint minim exercitation ad exercitation deserunt pariatur sit consequat laborum Lorem occaecat laborum. ",
    },
    {
      title: "android app",
      desc: "In consequat eu consectetur ullamco aliqua id nulla reprehenderit ex labore. Est reprehenderit sint minim exercitation ad exercitation deserunt pariatur sit consequat laborum Lorem occaecat laborum. Et in quis culpa velit pariatur dolor ullamco culpa labore cupidatat.",
    },
    {
      title: "cloud services",
      desc: "In consequat eu consectetur ullamco aliqua id nulla reprehenderit ex labore. Est reprehenderit sint minim exercitation ad exercitation deserunt pariatur sit consequat laborum Lorem occaecat laborum.",
    },
    {
      title: "domain hosting",
      desc: "In consequat eu consectetur ullamco aliqua id nulla reprehenderit ex labore. Est reprehenderit sint minim exercitation ad exercitation deserunt pariatur sit consequat laborum Lorem occaecat laborum. Et in quis culpa velit pariatur dolor ullamco culpa labore cupidatat.",
    },
    {
      title: "database management",
      desc: "In consequat eu consectetur ullamco aliqua id nulla reprehenderit ex labore. Est reprehenderit sint minim exercitation ad exercitation deserunt pariatur sit consequat laborum Lorem occaecat laborum. ",
    },
    {
      title: "24/7 service",
      desc: "In consequat eu consectetur ullamco aliqua id nulla reprehenderit ex labore. Est reprehenderit sint minim exercitation ad exercitation deserunt pariatur sit consequat laborum Lorem occaecat laborum.",
    },
  ]);

  const Address = useAddress([
    {
      address: "newyork",
      add_info: "united states america",
      icon: "region",
    },
    {
      address: "mobile no",
      add_info: "01781079305",
      icon: "phone",
    },
    {
      address: "email",
      add_info: "info@email.com",
      icon: "email",
    },
  ]);

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

      <div>{About}</div>
      <Section_title
        title="our services"
        desc="Dolor ex ad laboris duis amet dolor officia culpa anim ad cupidatat. Labore ex eiusmod laboris enim quis eiusmod consectetur dolor cupidatat Lorem cillum. Sunt irure laboris ipsum non quis enim sit eu voluptate officia ad. Magna esse non magna deserunt voluptate id sit dolore. Enim qui sint do ullamco. Quis ex ut laborum minim laboris consequat dolore occaecat laboris dolore nostrud officia aliquip aliquip."
      />

      <div>{Service}</div>
      <Section_title
        title="contact us"
        desc="Reprehenderit voluptate exercitation velit nisi nulla in id irure fugiat. Labore sint elit incididunt non ex id. Labore aute ea commodo in fugiat aliquip officia ea minim. Ea tempor aliqua laborum est dolor in sint ipsum occaecat incididunt labore adipisicing aliquip ad."
      />

      <div>{Address}</div>

      <Contact />

      <Footer text="&copy; 2023 all right reserved" />
    </div>
  );
};

export default Layout;
