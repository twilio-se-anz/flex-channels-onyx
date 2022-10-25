import { ITask, Tab } from "@twilio/flex-ui";
import { DefaultTaskChannels, ContentFragmentProps } from "@twilio/flex-ui";
import { ProductHomeIcon } from "@twilio-paste/icons/esm/ProductHomeIcon";
import { TASK_CHANNEL_APPLICATION } from "../../constants/constants";
import MortgageApplicationInfo from "./MortgageApplicationInfo";

const isApplicable = (task: ITask) =>
  task.taskChannelUniqueName === TASK_CHANNEL_APPLICATION;

const channel = DefaultTaskChannels.createDefaultTaskChannel(
  TASK_CHANNEL_APPLICATION,
  isApplicable,
  <ProductHomeIcon decorative={true} />,
  <ProductHomeIcon decorative={true} />
);
const options: ContentFragmentProps = { sortOrder: -1 };

channel.addedComponents = [
  {
    target: "TaskCanvasTabs",
    component: (
      <Tab
        icon={<ProductHomeIcon title="Customer Info" decorative={true} />}
        iconActive={<ProductHomeIcon decorative={true} />}
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
