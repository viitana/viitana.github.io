import * as React from "react";
import { render } from "react-dom";

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

import { SocialIcon } from 'react-social-icons';
import WaveBg from "./components/WaveBg";
import SourceLinkBox from "./components/SourceLink";

const App = () => {
  const customTheme = {
    ...theme,
    shadows: {
      outline: "none",
    }
  };

  const imgsrc = require('./res/profile_banner.png');

  const baseDivStyle = {
    width: '100%',
    height: '100%',
    position:'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f0f0'
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <div style={baseDivStyle}>
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
            src={imgsrc}
            alt="That's me"
            w="700px"
          />

          <Tabs
            isFitted
            align="end"
            size="lg"
            variant="enclosed"
          >
            <Box h="360px">
              <TabPanels>
                <TabPanel>
                  <Box
                      p="38px"
                      overflow="hidden"
                      overflowWrap="break-word"
                    >
                      <Text fontSize="xl" pb="16px">Hello & welcome!</Text>
                      <Text fontSize="sm" pb="16px">I'm Atte, an eager software developer at day and your average tech enthusiast at night. Currently studying computer science at Aalto University. This is my personal little webpage.</Text>
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
        <WaveBg/>
        <SourceLinkBox/>
      </div>
    </ThemeProvider>
  );

};

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
