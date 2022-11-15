import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Table,
  TBody,
  Td,
  Th,
  THead,
  Tr,
  Card,
  Stack,
  SkeletonLoader,
} from "@twilio-paste/core";

import { ThumbsUpIcon } from "@twilio-paste/icons/esm/ThumbsUpIcon";
import { BusinessIcon } from "@twilio-paste/icons/esm/BusinessIcon";
import { CommunityIcon } from "@twilio-paste/icons/esm/CommunityIcon";
import { StarIcon } from "@twilio-paste/icons/esm/StarIcon";
import { withTaskContext } from "@twilio/flex-ui";

type Props = {
  task?: any;
};

const FauxMortgageInfo = (props: Props) => {
  const [loading, setLoading] = useState(true);

  // Fake Loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <Card>
        <Stack orientation={"vertical"} spacing={"space70"}>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </Stack>
      </Card>
    );

  return (
    <Box style={{ minWidth: "100Px" }}>
      <Stack orientation={"vertical"} spacing={"space40"}>
        <Table>
          <THead>
            <Tr>
              <Th>Application Information</Th>
            </Tr>
          </THead>
          <TBody>
            <Tr>
              <Td>
                <Text as="span" display={"flex"}>
                  <StarIcon decorative={true} about="Age Group" />
                  <Box marginLeft="space40">
                    Loan Term <strong>Investment</strong>
                  </Box>
                </Text>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Text as="span" display={"flex"}>
                  <ThumbsUpIcon decorative={true} about="Location" />
                  <Box marginLeft="space40">
                    I'll be paying <strong>Principal & Interest</strong>
                  </Box>
                </Text>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Text as="span" display={"flex"}>
                  <BusinessIcon decorative={true} about="Segment" />
                  <Box marginLeft="space40">
                    Loan type <strong>Fixed</strong>
                  </Box>
                </Text>
              </Td>
            </Tr>
          </TBody>
        </Table>
      </Stack>
    </Box>
  );
};

export default withTaskContext(FauxMortgageInfo);
