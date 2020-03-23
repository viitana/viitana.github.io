import * as React from "react";
import { Box, Link, Icon } from "@chakra-ui/core";

const SourceLinkBox = props => {
  const boxStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    width: "200px",
    margin: "-50px 0 0 -100px",
  }

  return (
    <Box
      bg="rgba(255, 255, 255, .8)"
      borderRadius="4px"
      p="5px"
      textAlign="center"
      fontSize="14px"
      style={boxStyle}
    >
      <Link
        href="https://github.com/viitana/viitana.github.io"
        isExternal
      >
        Page source @ Github <Icon name="external-link" mx="2px" />
      </Link>
    </Box>
  );
}

export default SourceLinkBox;
