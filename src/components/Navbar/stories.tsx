import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from ".";

export default {
  title: "Navbar",
  component: Navbar
} as unknown as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});
Default.args = {};
