import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
      color="#104c68"
      mt="19px"
      mr="16px"
      gap="15px"
      float="right"
      w="auto"
      justify="center"
      align="center"
      fontSize="15px"
    >
      <Link>Blog</Link>
      <Link>About</Link>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};

export default Navbar;
