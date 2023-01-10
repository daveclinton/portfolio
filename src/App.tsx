import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import Home from "./pages";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box></Box>
    <Home />
  </ChakraProvider>
);
