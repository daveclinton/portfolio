import * as React from "react";
import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Icon,
  Flex,
  Link,
} from "@chakra-ui/react";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box bg="#00294d" h="auto" w="100%" pt="10px" color="#fff" mt="40px">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        textAlign="center"
      >
        <Heading as="h3" fontSize="24px" lineHeight="3rem">
          Clinton David
        </Heading>
        <Text maxW="500px" m="5px auto" lineHeight="28px" fontSize="14px">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing
        </Text>
        <UnorderedList
          listStyleType="none"
          display="flex"
          justifyContent="center"
        >
          <ListItem
            m="0 10px"
            _hover={{ color: "yellow" }}
            transition="color .4s ease"
          >
            <Link href="https://github.com/daveclinton">
              <Icon as={VscGithub} />
            </Link>
          </ListItem>
          <ListItem
            m="0 10px"
            _hover={{ color: "yellow" }}
            transition="color .4s ease"
          >
            <Link href="https://twitter.com/daveclintonn">
              <Icon as={VscTwitter} />
            </Link>
          </ListItem>
          <ListItem
            m="0 10px"
            _hover={{ color: "yellow" }}
            transition="color .4s ease"
          >
            <Link href="https://www.linkedin.com/in/clintondavid46/">
              <Icon as={AiFillLinkedin} />
            </Link>
          </ListItem>
        </UnorderedList>
      </Flex>
      <Box bg="#fff" w="auto" textAlign="center" color="#00294d">
        <Text fontSize="14px" letterSpacing="2px" fontWeight={200}>
          copyright &copy;2023. designed by <span>ME</span>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
