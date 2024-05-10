import { Image, Container, Title, Button, Group, Text } from "@mantine/core";
import classes from "./Hero.module.css";
import TerminalImage from "../../../public/assets/terminal.svg";

export default function HeroBullets() {
  return (
    <div className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          <span className={classes.highlight}>Too Doo</span> : CLI Todo
          Application
        </Title>
        <Text c='dimmed' mt='md'>
          A command-line application for managing your to-do list efficiently.
          With Too-Doo, you can add, delete, complete, and view tasks directly
          from your terminal
        </Text>
        <Group mt={30}>
          <Button
            radius='xl'
            size='md'
            className={classes.control}
            variant='gradient'
            gradient={{ deg: 133, from: "blue", to: "purple" }}
          >
            Try now
          </Button>
          <Button
            variant='light'
            radius='xl'
            size='md'
            className={classes.control}
          >
            {`Source code </>`}
          </Button>
        </Group>
      </div>
      <Image
        alt='terminal-image'
        src={TerminalImage.src}
        width={506}
        height={253}
      />
    </div>
  );
}
