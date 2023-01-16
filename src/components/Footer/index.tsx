import * as React from "react";
import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Icon,
} from "@chakra-ui/react";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box>
      <Box>
        <Heading as="h3">Clinton David</Heading>
        <Text>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing
        </Text>
        <UnorderedList>
          <ListItem>
            <Icon as={VscGithub} />
          </ListItem>
          <ListItem>
            <Icon as={VscTwitter} />
          </ListItem>
          <ListItem>
            <Icon as={AiFillLinkedin} />
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Footer;
