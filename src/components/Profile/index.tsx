import * as React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
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
      <Flex flexDir="column" maxW={{ base: "400px", md: "650px" }}>
        <Heading as="h3" color="#476894" justifyContent="start">
          Contact
        </Heading>
        <Divider borderColor="#476894" mt="20px" />
        <Text mt="10px">
          Hey! Feel free to tweet me:{" "}
          <Link href="" color="#476894">
            @daveclintonn.
          </Link>
        </Text>
        <Text>
          I am a Software A developer with over 2 years of experience in
          developing impactful web applications. A team collaborator aiming at
          working with teams to efficiently handle building of systems from
          ideation to production.
        </Text>
        <Heading as="h3" color="#476894" justifyContent="start" mt="20px">
          Knowledge and Skills
        </Heading>
        <Divider borderColor="#476894" mt="20px" mb="20px" />
        <Text>I am always eager to know more</Text>
        <UnorderedList>
          <Accordion allowToggle>
            <AccordionItem>
              <Heading>
                <AccordionButton>
                  <Heading
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="24px"
                    color="#476894"
                    justifyContent="start"
                    mt="20px"
                  >
                    Software Development
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel>
                <ListItem mt="10px">
                  <strong>React: </strong> Proficient in building efficient and
                  scalable single-page applications using the latest features of
                  React, including hooks and state management tools.
                </ListItem>
                <ListItem mt="10px">
                  <strong>TypeScript: </strong>Experienced in building type-safe
                  JavaScript applications using TypeScript and integrating it
                  with React.
                </ListItem>
                <ListItem mt="10px">
                  <strong>Python:</strong> Strong understanding of the Python
                  programming language and experience building web applications
                  using the Django framework.
                </ListItem>
                <ListItem mt="10px">
                  <strong>Postgres:</strong> Experience with designing and
                  implementing relational databases using Postgres, including
                  optimizing queries and managing data integrity.
                </ListItem>
                <ListItem mt="10px">
                  <strong>MongoDB: </strong>Experience with NoSQL databases and
                  knowledge of data modeling, indexing, and performance tuning
                  in MongoDB.
                </ListItem>
                <ListItem mt="10px">
                  <strong>Cypress: </strong>Experience with end-to-end testing
                  using Cypress, including testing user flows, data validation,
                  and handling asynchronous requests.
                </ListItem>
                <ListItem mt="10px">
                  <strong> Website development:</strong> Skilled in using HTML,
                  CSS, and JavaScript for creating responsive, mobile-friendly
                  websites.
                </ListItem>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle>
            <AccordionItem>
              <Heading>
                <AccordionButton>
                  <Heading
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="24px"
                    color="#476894"
                    justifyContent="start"
                    mt="20px"
                  >
                    Jira Solutions Engineer
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel>
                <ListItem mt="10px">
                  <strong> Jira Administration: </strong>Proficient in setting
                  up and configuring Jira projects, customizing workflows,
                  managing users, and integrating Jira with other tools.
                </ListItem>
                <ListItem mt="10px">
                  <strong>Confluence Administration:</strong> Experience with
                  creating and managing Confluence spaces, customizing
                  templates, and integrating Confluence with other tools.
                </ListItem>
                <ListItem mt="10px">
                  <strong>Jira/Confluence Customization: </strong>Skilled in
                  creating custom Jira plugins and customizing the
                  Jira/Confluence UI to meet specific client needs.
                </ListItem>
                <ListItem mt="10px">
                  <strong>Jira/Confluence Scripting: </strong>Experience with
                  writing Jira/Confluence scripts in Groovy for automating tasks
                  and integrating Jira/Confluence with other tools.
                </ListItem>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle>
            <AccordionItem>
              <Heading>
                <AccordionButton>
                  <Heading
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="24px"
                    color="#476894"
                    justifyContent="start"
                    mt="20px"
                  >
                    Technical Content Maverick
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel>
                <ListItem mt="10px">
                  <strong>Technical Writing: </strong>Experience with creating
                  technical documents, user manuals, API documentation and
                  knowledge base articles using tools like Microsoft Word,
                  Confluence, AsciiDoc, Markdown and LaTeX. Skilled in
                  explaining complex technical concepts in simple and
                  easy-to-understand language.
                </ListItem>
                <ListItem mt="10px">
                  Experience with writing technical content for a wide range of
                  audiences, including non-technical users, developers, and IT
                  professionals.
                </ListItem>
                <ListItem mt="10px">
                  Experience with creating technical diagrams, flowcharts and
                  screenshots to help illustrate technical concepts.
                </ListItem>
                <ListItem mt="10px">
                  Knowledge of documentation best practices, such as content
                  design, user testing, and version control.
                </ListItem>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowToggle>
            <AccordionItem>
              <Heading>
                <AccordionButton>
                  <Heading
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize="24px"
                    color="#476894"
                    justifyContent="start"
                    mt="20px"
                  >
                    WordPress full-stack developer
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel>
                <ListItem mt="10px">
                  <strong>Wordpress Development: </strong>Strong experience in
                  building and customizing Wordpress websites, including themes
                  and plugins.
                </ListItem>
                <ListItem mt="10px">
                  <strong>Wordpress Theme Customization:</strong> Skilled in
                  customizing Wordpress themes using HTML, CSS, JavaScript, and
                  PHP.
                </ListItem>
                <ListItem mt="10px">
                  <strong>Wordpress Theme Customization:</strong> Skilled in
                  customizing Wordpress themes using HTML, CSS, JavaScript, and
                  PHP.
                </ListItem>
                <ListItem mt="10px">
                  <strong>Wordpress Plugin Development:</strong> Experience in
                  developing custom Wordpress plugins to add new features and
                  functionality to Wordpress websites.
                </ListItem>
                <ListItem mt="10px">
                  <strong>Wordpress Security: </strong>Knowledge of best
                  practices for securing Wordpress websites and experience with
                  implementing security measures to protect Wordpress sites.
                </ListItem>
                <ListItem mt="10px">
                  <strong>Wordpress Performance Optimization: </strong>
                  Experience in optimizing Wordpress sites for performance,
                  including caching, compression and image optimization
                </ListItem>
                <ListItem mt="10px">
                  <strong>Wordpress SEO Optimization: </strong>Knowledge of best
                  practices for optimizing Wordpress sites for search engines,
                  including meta tags, structured data, and content
                  optimization.
                </ListItem>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

export default Profile;
