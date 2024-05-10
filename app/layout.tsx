import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript, Container } from "@mantine/core";
import { theme } from "../theme";
import { HeaderMenu } from "./components/header/Header";
import { FooterSimple } from "./components/footer/Footer";

export const metadata = {
  title: "Too Doo </>",
  description:
    "Too Doo is a CLI task management application that allows you to add, delete, complete, and view tasks directly from your terminal",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderMenu />
          <Container size='xl'>{children}</Container>
          <FooterSimple />
        </MantineProvider>
      </body>
    </html>
  );
}
