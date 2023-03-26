import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GeoCardSlider from ".";
import newsMock from "./news";
import partnersMock from "./partners";

export default {
  title: "GeoCardSlider",
  component: GeoCardSlider
} as unknown as ComponentMeta<typeof GeoCardSlider>;

const Template: ComponentStory<typeof GeoCardSlider> = (args) => (
  <GeoCardSlider {...args} />
);

export const WithNews = Template.bind({});
export const WithPartners = Template.bind({});

WithNews.args = {
  items: newsMock
};
WithPartners.args = {
  items: partnersMock
};
