import * as React from "react";
import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MyProfile from "../../assets/david.png";
import Underline from "../../assets/underline.svg";

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = () => {
  return (
    <Flex justifyContent="center" align="center" flexDir="column" mt="20px">
      <Heading as="h3" color="#476894">
        About
      </Heading>
      <Image src={Underline} boxShadow="20px" mt="-40px" />
      <Image
        src={MyProfile}
        alt="Dan Abramov"
        mt="40px"
        boxSize="300px"
        borderRadius="full"
        sx={{ border: "8px solid #476894" }}
      />
      <Flex flexDir="column" maxW="650px">
        <Heading as="h3" color="#476894" justifyContent="start">
          Contact
        </Heading>
        <Divider borderColor="#476894" mt="20px" />
        <Text mt="10px">
          Hey! Feel free to tweet me: @daveclintonn. Due to limited bandwidth, I
          don't answer handbook questions nor do I share removed content.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Profile;
