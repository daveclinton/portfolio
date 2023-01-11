import * as React from "react";
import { Card, CardBody, Flex, Text, Image, Heading } from "@chakra-ui/react";
import CardOne from "../../assets/stepOne.svg";
import CardTwo from "../../assets/stepTwo.svg";
import CardThree from "../../assets/stepThree.svg";

type StrategyProps = {};

const Strategy: React.FC<StrategyProps> = () => {
  return (
    <Flex
      w="auto"
      justifyContent="center"
      align="center"
      gap="40px"
      flexDir={{ base: "column", lg: "row" }}
      mt="30px"
    >
      <Card maxW={{ base: "300px", lg: "sm" }} maxH="sm">
        <Image
          src={CardOne}
          alt="Chakra UI"
          boxSize="210px"
          mx="auto"
          mt="10px"
        />
        <CardBody>
          <Heading as="h3" textAlign="center">
            Balance
          </Heading>
          <Text textAlign="center" fontSize={{ base: "16px", lg: "20px" }}>
            Achieving a good work-life balance can help you to be more
            productive, engaged and satisfied both in your professional and
            personal life, as well as reducing stress and the risk of burnout.
            This can be a difficult balance to achieve, especially in the
            fast-paced environment of software development.
          </Text>
        </CardBody>
      </Card>
      <Card maxW={{ base: "300px", lg: "sm" }} maxH="sm">
        <Image src={CardTwo} alt="Chakra UI" boxSize="210px" mx="auto" />
        <CardBody>
          <Heading as="h3" textAlign="center">
            Focus
          </Heading>
          <Text textAlign="center" fontSize={{ base: "18px", lg: "20px" }}>
            When you're working on a task, it's important to minimize
            distractions and stay focused. Use techniques such as the Pomodoro
            Technique to break your work into smaller, focused sessions, and use
            apps or browser extensions to block distracting websites.
          </Text>
        </CardBody>
      </Card>
      <Card maxW={{ base: "300px", lg: "sm" }} maxH="sm">
        <Image src={CardThree} alt="Chakra UI" boxSize="210px" mx="auto" />
        <CardBody>
          <Heading as="h3" textAlign="center">
            Learn
          </Heading>
          <Text textAlign="center" fontSize={{ base: "18px", lg: "20px" }}>
            The field of software development is always evolving, and staying
            up-to-date with the latest technologies and best practices is
            crucial for staying productive. Take the time to learn new skills,
            and attend relevant meetups.
          </Text>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Strategy;
