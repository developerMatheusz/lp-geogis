import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "../../pages/home";
import bannersMock from "../../pages/home/slider/mock";
import newsMock from "../../components/GeoCardSlider/mock";

export default {
  title: "Home",
  component: Home
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => (
  <Home news={newsMock} banners={bannersMock} />
);

export const Default = Template.bind({});
