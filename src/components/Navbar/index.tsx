import * as React from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { useLocation } from "react-router-dom";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const location = useLocation();
  const path = location.pathname;
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
        {path === "/" ? null : <Link href="/">Home</Link>}
        <Link>Blog</Link>
        <Link href="/about">About</Link>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
    </Box>
  );
};

export default Navbar;
