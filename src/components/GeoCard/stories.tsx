import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GeoCard from ".";

export default {
  title: "GeoCard",
  component: GeoCard
} as unknown as ComponentMeta<typeof GeoCard>;

const Template: ComponentStory<typeof GeoCard> = (args) => (
  <div style={{ maxWidth: "30rem", maxHeight: "30rem" }}>
    <GeoCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "INTERMAT",
  img: "/img/media/img1.jpg",
  description:
    "Intermat segue com atendimento para regularizar imóveis em Cuiabá e Várzea Grande"
};
