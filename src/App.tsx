import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Home from "./pages/Home";
import About from "./pages/About";

type AppProps = {};

export const App: React.FC<AppProps> = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
