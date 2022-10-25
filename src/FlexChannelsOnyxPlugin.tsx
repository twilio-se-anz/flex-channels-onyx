import React from "react";
import * as Flex from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";
import applicationChannel from "./channel/MortgageApplication/MortgageApplicationChannel";
import creditCardFraudChannel from "./channel/CreditCardFraud/CreditCardFraudChannel";
import { CustomizationProvider } from "@twilio-paste/core/customization";

import Panel from "./components/Panel";

const PLUGIN_NAME = "FlexChannelsOnyxPlugin";

export default class FlexChannelsOnyxPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    // Add Paste
    flex.setProviders({
      PasteThemeProvider: CustomizationProvider,
    });

    // Add custom channels
    Flex.TaskChannels.register(applicationChannel, false);
    Flex.TaskChannels.register(creditCardFraudChannel, false);

    const rightPanel = <Panel key="panel-replacement" />;

    // //This replaces "CRM Container" or "Panel2" with our own custom panel that we use to switch between screen pops
    flex.AgentDesktopView.Panel2.Content.replace(rightPanel, { sortOrder: -1 });
  }
}
