import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "@/pages/home";
import bannersMock from "@/components/SliderNews/banners";
import newsMock from "@/components/GeoCardSlider/news";
import partnersMock from "@/components/GeoCardSlider/partners";

export default {
  title: "Home",
  component: Home
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => (
  <Home news={newsMock} banners={bannersMock} partners={partnersMock} />
);

export const Default = Template.bind({});
