import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AdditionalInformation from ".";
import mock from "./mock";

export default {
  title: "AdditionalInformation",
  component: AdditionalInformation,
  args: {
    items: mock
  }
} as unknown as ComponentMeta<typeof AdditionalInformation>;

const Template: ComponentStory<typeof AdditionalInformation> = (args) => (
  <AdditionalInformation {...args} />
);

export const Default = Template.bind({});
