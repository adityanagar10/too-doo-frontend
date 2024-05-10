"use client";

import { Group, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";

const links = [
  { link: "/about", label: "Features" },
  { link: "/documentation", label: "Documentation" },
  {
    link: "https://github.com/adityanagar10/too-doo/releases",
    label: "Releases",
  },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size='md'>
        <div className={classes.inner}>
          <Group gap={5} visibleFrom='sm'>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size='sm' hiddenFrom='sm' />
        </div>
      </Container>
    </header>
  );
}
