import React from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Box>
      <Flex
        color="#104c68"
        mt="19px"
        mr="16px"
        gap="15px"
        w="auto"
        justify="end"
        align="center"
        fontSize="15px"
      >
        <Link>Blog</Link>
        <Link href="/about">About</Link>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Box>
  );
};

export default Navbar;
