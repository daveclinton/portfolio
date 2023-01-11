import * as React from "react";
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

type TitleProps = {};

const Title: React.FC<TitleProps> = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Flex w="auto" justifyContent="center" align="center" flexDir="column">
      <Text color="#00294d" fontSize="17px">
        {path === "/about" ? "Get to Know" : "The Productivity Strategies of "}
      </Text>
      <Heading color="#476894" fontSize={{ base: "37px", md: "57px" }}>
        Clinton David
      </Heading>
      <Divider borderColor="#476894" mt="20px" />
    </Flex>
  );
};

export default Title;
