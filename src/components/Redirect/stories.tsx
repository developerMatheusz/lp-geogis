import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Redirect from ".";

export default {
  title: "Redirect",
  component: Redirect
} as unknown as ComponentMeta<typeof Redirect>;

const Template: ComponentStory<typeof Redirect> = () => <Redirect />;

export const Default = Template.bind({});
Default.args = {};
