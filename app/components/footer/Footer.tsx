"use client";

import { Container, Group, Anchor, Text } from "@mantine/core";
import classes from "./Footer.module.css";
const links = [
  { link: "https://github.com/adityanagar10/too-doo", label: "Source Code" },
  { link: "/documentation", label: "Documentation" },
  {
    link: "https://github.com/adityanagar10/too-doo/releases",
    label: "Releases",
  },
  { link: "https://twitter.com/adityanagar_", label: "Contact Me" },
];

export function FooterSimple() {
  const items = links.map((link) => (
    <Anchor<"a"> c='dimmed' key={link.label} href={link.link} size='sm'>
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text c='dimmed'>
          Made with 💙 by{" "}
          <Anchor<"a"> href='https://twitter.com/includebitslab'>
            includebitslab
          </Anchor>
        </Text>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
