import React from "react";
import { Flex, Stack, Box, Separator, Heading } from "@twilio-paste/core";

const FauxMortgageApplication = () => {
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  return (
    <Flex hAlignContent="center" vertical>
      <Box display="flex" columnGap="space40" rowGap="space60">
        <Stack
          orientation={"vertical"}
          spacing={"space40"}
          style={{ textAlign: "center" }}
        >
          <Flex hAlignContent="center" vertical>
            {/* <img src={"/images/rocket.svg"} /> */}
            <img
              src="https://indigo-fly-3476.twil.io/assets/rocket.svg"
              alt="Rocket"
            />
          </Flex>
          <Heading as="h4" variant="heading40">
            Mortgage Application
          </Heading>
          <p>Started on {date}</p>
        </Stack>
      </Box>
      <Box backgroundColor="colorBackgroundBody" padding="space50">
        <Separator orientation="horizontal" verticalSpacing="space50" />
      </Box>
    </Flex>
  );
};

export default FauxMortgageApplication;
