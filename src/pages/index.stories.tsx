import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { C } from "./index";

export default {
  title: "Example/Page",
  component: C,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof C>;

const Template: ComponentStory<typeof C> = (args) => <C {...args} />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
