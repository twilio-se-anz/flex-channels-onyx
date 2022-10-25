import { ITask, Tab } from "@twilio/flex-ui";
import { DefaultTaskChannels, ContentFragmentProps } from "@twilio/flex-ui";
import { CreditCardIcon } from "@twilio-paste/icons/esm/CreditCardIcon";
import { TASK_CHANNEL_CC_FRAUD } from "../../constants/constants";
import MortgageApplicationInfo from "./CreditCardFraudPanel";

const isApplicable = (task: ITask) =>
  task.taskChannelUniqueName === TASK_CHANNEL_CC_FRAUD;

const channel = DefaultTaskChannels.createDefaultTaskChannel(
  TASK_CHANNEL_CC_FRAUD,
  isApplicable,
  <CreditCardIcon decorative={true} />,
  <CreditCardIcon decorative={true} />
);
const options: ContentFragmentProps = { sortOrder: -1 };

channel.addedComponents = [
  {
    target: "TaskCanvasTabs",
    component: (
      <Tab
        icon={<CreditCardIcon title="Customer Info" decorative={true} />}
        iconActive={<CreditCardIcon decorative={true} />}
        uniqueName="customerInfoTab"
        key="customerInfoTab"
        label="Customer Info"
      >
        <MortgageApplicationInfo />
      </Tab>
    ),
    options: options,
  },
];

channel.componentProps;

export default channel;
