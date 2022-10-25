import React from "react";
import { Flex, Stack, Box, Separator, Heading } from "@twilio-paste/core";

const Banner = () => {
  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Flex hAlignContent="center" vertical grow>
        <Box display="flex" columnGap="space40" rowGap="space60">
          <Stack
            orientation={"vertical"}
            spacing={"space40"}
            style={{ textAlign: "center" }}
          >
            <Flex hAlignContent="center" vertical>
              <img src={"/images/hero.svg"} style={{ width: "50rem" }} />
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </div>
  );
};

export default Banner;
