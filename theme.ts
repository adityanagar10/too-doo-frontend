"use client";

import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  colors: {
    // Add your color
    blue: [
      "#F0F3FF",
      "#D4DBF6",
      "#B9C1ED",
      "#9DA6E4",
      "#828CDB",
      "#6772D2",
      "#4D59C9",
      "#333FC0",
      "#1A26B7",
      "#001CAE",
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});
