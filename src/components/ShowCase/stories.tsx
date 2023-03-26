import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ShowCase from ".";
import newsMock from "../GeoCardSlider/news";

export default {
  title: "ShowCase",
  component: ShowCase,
  args: {
    title: "NOSSOS PARCEIROS",
    news: newsMock
  }
} as unknown as ComponentMeta<typeof ShowCase>;

const Template: ComponentStory<typeof ShowCase> = (args) => (
  <ShowCase {...args} />
);

export const Default = Template.bind({});
Default.args = {};
