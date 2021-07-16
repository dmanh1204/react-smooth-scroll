import React, { useState } from "react";
import Navbar from "../components/navbar/index";
import Sidebar from "../components/sidebar/index";
import Hero from "../components/herosection/index";
import Infor from "../components/infosection";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Infor />
    </>
  );
};

export default Home;
