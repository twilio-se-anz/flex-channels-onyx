import React from "react";
import { withTaskContext } from "@twilio/flex-ui";
import Frame from "./Frame";
import Banner from "./Banner";

class Panel extends React.Component {
  render() {
    const data = {};

    if (this.props.data) data = this.props.data;

    // Add task.attributes to the data object. Undefined if there is no task
    // such as on settings screen.
    data.taskAttributes = this.props?.task?.attributes ?? undefined;

    if (data.taskAttributes && data.taskAttributes.frameUrl)
      return <Frame data={data} />;

    return <Banner />;
  }
}

export default withTaskContext(Panel);
