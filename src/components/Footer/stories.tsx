import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from ".";

export default {
  title: "Footer",
  component: Footer
} as unknown as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
