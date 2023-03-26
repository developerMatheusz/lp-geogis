import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormFeedback from ".";

export default {
  title: "FormFeedback",
  component: FormFeedback
} as unknown as ComponentMeta<typeof FormFeedback>;

const Template: ComponentStory<typeof FormFeedback> = () => <FormFeedback />;

export const Default = Template.bind({});
