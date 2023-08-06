import type { Collection } from "tinacms";

export const global: Collection = {
  name: "global",
  label: "Global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "image",
      label: "Logo",
      name: "logo",
    },
    {
      type: "image",
      label: "Title",
      name: "title",
    },
  ],
};
