import * as React from "react";
import { Flex, Heading } from "@chakra-ui/react";

type StrategyProps = {};

const Strategy: React.FC<StrategyProps> = () => {
  return (
    <Flex
      w="auto"
      justifyContent="center"
      align="center"
      gap="40px"
      flexDir={{ base: "column", lg: "row" }}
      mt="30px"
    >
      <Heading>Character matters</Heading>
    </Flex>
  );
};

export default Strategy;
