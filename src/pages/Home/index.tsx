import * as React from "react";
import { Box } from "@chakra-ui/layout";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Strategy from "../../components/StrategyCards";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <Box>
      <Navbar />
      <Title />
      <Strategy />
    </Box>
  );
};

export default Home;
