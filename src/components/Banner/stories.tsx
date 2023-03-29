import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Banner from ".";

export default {
  title: "Banner",
  component: Banner
} as unknown as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  img: "/img/work3.jpg",
  title: "Você tem direito a regularização fundiária",
  subtitle:
    "A GeoGIS já trabalhou junto à Administração para garantir esse direito a mais de 12 mil famílias em todos os requisitos técnicos."
};
