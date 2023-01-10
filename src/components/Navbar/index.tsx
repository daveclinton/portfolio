import React from "react";
import { Flex, Link } from "@chakra-ui/react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex>
      <Link>Blog</Link>
      <Link>About</Link>
    </Flex>
  );
};

export default Navbar;
