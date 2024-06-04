import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        // order: ['Introduction', 'Styleguide', 'Atoms', ['Readme', '*'], 'Molecules', ['Readme', '*'], 'Organisms', ['Readme', '*']],
        //  locales: 'en-US',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
