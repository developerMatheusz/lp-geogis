import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Slider from ".";

export default {
  title: "Slider",
  component: Slider
} as unknown as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Slider>
);

export const Default = Template.bind({});
Default.args = {};
