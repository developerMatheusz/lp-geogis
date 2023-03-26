import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SliderNews from ".";
import bannersMock from "./banners";

export default {
  title: "SliderNews",
  component: SliderNews,
  args: {
    items: bannersMock
  }
} as unknown as ComponentMeta<typeof SliderNews>;

const Template: ComponentStory<typeof SliderNews> = (args) => (
  <SliderNews {...args} />
);

export const Default = Template.bind({});
Default.args = {};
