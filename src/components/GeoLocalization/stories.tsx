import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GeoLocalization from ".";

export default {
  title: "GeoLocalization",
  component: GeoLocalization
} as unknown as ComponentMeta<typeof GeoLocalization>;

const Template: ComponentStory<typeof GeoLocalization> = () => (
  <GeoLocalization />
);

export const Default = Template.bind({});
