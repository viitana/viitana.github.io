import * as React from "react";

import { SocialIcon } from 'react-social-icons';
import {
  CSSReset,
  ThemeProvider,
  Box,
  Image,
  Stack,
  Text,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  theme,
  Stat,
  StatNumber,
  StatHelpText,
  PseudoBox,
} from "@chakra-ui/core";

const MainPanel = props => {
  const imgsrc = require('../res/profile_banner.png');
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <Box
      w="500px"
      borderWidth="px"
      overflow="hidden"
      bg="white"
      borderRadius="6px"
      borderColor="white"
      boxShadow="0 6px 10px rgba(1,1,1,.15)"
    >
      <Image
        w="500px"
        h="195px"
        onLoad={() => setImgLoaded(true)}
        style={{ visibility: imgLoaded ? "visible" : "hidden" }}
        src={imgsrc}
      />
      <Tabs
        isFitted
        align="end"
        size="lg"
        variant="enclosed"
      >
        <Box h="260">
          <TabPanels>
            <TabPanel>
              <Box
                  p="38px"
                  overflow="hidden"
                  overflowWrap="break-word"
                >
                  <Text fontSize="xl" pb="16px">Hello & welcome!</Text>
                  <Text fontSize="sm" pb="16px">I'm Atte, an eager software developer and technology enthusiast. Currently studying computer science at Aalto University. This is my personal little webpage.</Text>
                  <Text fontSize="sm">I'm most passionate about software design and development, specifically 3D graphics programming and cloud services.</Text>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p="23px">
                <Stack>
                  <PseudoBox
                    as="button"
                    textAlign="left"
                    onClick={() =>
                      window.location.href = "https://www.linkedin.com/in/atte-viitanen"
                    }
                    p="8px"
                    pl="16px"
                    border="1px solid"
                    borderRadius="6px"
                    borderColor="rgb(226, 232, 240)"
                    d="flex"
                    alignItems="center"
                    _hover={{ borderColor: "gray.200", bg: "gray.50" }}
                  >
                    <SocialIcon url="https://www.linkedin.com/in/atte-viitanen"/>
                    <Stat ml="16px">
                      <StatNumber fontSize="md">LinkedIn</StatNumber>
                      <StatHelpText >linkedin.com/in/atte-viitanen</StatHelpText>
                    </Stat>
                  </PseudoBox>
                  <PseudoBox
                    as="button"
                    textAlign="left"
                    onClick={() =>
                      window.location.href = "https://github.com/viitana"
                    }
                    p="8px"
                    pl="16px"
                    border="1px solid"
                    borderRadius="6px"
                    borderColor="rgb(226, 232, 240)"
                    d="flex"
                    alignItems="center"
                    _hover={{ borderColor: "gray.200", bg: "gray.50" }}
                  >
                    <SocialIcon url="https://github.com/viitana"/>
                    <Stat ml="16px">
                        <StatNumber fontSize="md">GitHub</StatNumber>
                      <StatHelpText>github.com/viitana</StatHelpText>
                    </Stat>
                  </PseudoBox>
                </Stack>
              </Box>

            </TabPanel>
          </TabPanels>
        </Box>
        <TabList>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default MainPanel;
