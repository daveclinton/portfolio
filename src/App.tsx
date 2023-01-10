import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Home from "./pages";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <ColorModeSwitcher justifySelf="flex-end" display="none" />
    </Box>
    <Home />
  </ChakraProvider>
);
