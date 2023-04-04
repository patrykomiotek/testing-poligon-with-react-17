import React from 'react';
import { initialize, mswDecorator } from "msw-storybook-addon";
import { Provider } from "react-redux";
import type { Preview } from "@storybook/react";

import { store } from "../src/store";

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ["Atoms", "Molecules", "Organisms"],
        method: "numeric",
      },
    },
  },
};

export const decorators = [
  mswDecorator,
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];

export default preview;
