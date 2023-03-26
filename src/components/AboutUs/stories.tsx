import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AboutUs from ".";
import navMock from "./navmock";
import bodyMock from "./bodymock";

export default {
  title: "AboutUs",
  component: AboutUs,
  args: {
    itemsNav: navMock,
    itemsBody: bodyMock
  }
} as unknown as ComponentMeta<typeof AboutUs>;

const Template: ComponentStory<typeof AboutUs> = (args) => (
  <AboutUs {...args} />
);

export const Default = Template.bind({});
