import React from "react";
import { Box } from "@twilio-paste/core";
import FauxCustomerInfo from "../../components/FauxCustomerInfo";
import FauxMortgageApplication from "../../components/FauxMortgageApplication";

const MortgageApplicationInfo = () => {
  return (
    <Box as="main" padding="space70">
      <FauxMortgageApplication />
      <FauxCustomerInfo key="customerInfo" />
    </Box>
  );
};

export default MortgageApplicationInfo;
