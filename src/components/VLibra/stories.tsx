import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import VLibra from ".";

export default {
  title: "VLibra",
  component: VLibra
} as unknown as ComponentMeta<typeof VLibra>;

const Template: ComponentStory<typeof VLibra> = () => <VLibra />;

export const Default = Template.bind({});
Default.args = {};
