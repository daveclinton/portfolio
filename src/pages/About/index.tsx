import * as React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Profile from "../../components/Profile";
import Footer from "../../components/Footer";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <Box>
      <Navbar />
      <Title />
      <Profile />
      <Footer />
    </Box>
  );
};

export default About;
