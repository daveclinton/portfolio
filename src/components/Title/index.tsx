import * as React from "react";
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";

type TitleProps = {};

const Title: React.FC<TitleProps> = () => {
  return (
    <Flex w="auto" justifyContent="center" align="center" flexDir="column">
      <Text color="#00294d" fontSize="17px">
        The Strategies of
      </Text>
      <Heading
        color="#476894"
        fontSize={{ base: "37px", md: "57px" }}
        textShadow="1px 0 0 #2e5b97, -4px -5px 0 rgb(0 133 255 / 3%"
      >
        Clinton David
      </Heading>
      <Divider borderColor="#476894" mt="20px" />
    </Flex>
  );
};

export default Title;
