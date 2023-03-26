import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Whatsapp from ".";

export default {
  title: "Whatsapp",
  component: Whatsapp
} as unknown as ComponentMeta<typeof Whatsapp>;

const Template: ComponentStory<typeof Whatsapp> = () => <Whatsapp />;

export const Default = Template.bind({});
Default.args = {};
