import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  rem,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconClock,
  IconPalette,
  IconBrandGolang,
} from "@tabler/icons-react";
import classes from "./Features.module.css";

const features = [
  {
    icon: IconReceiptOff,
    title: "Free and open source",
    description:
      "All packages are published under MIT license, you can use TooDoo in any project",
  },
  {
    icon: IconBrandGolang,
    title: "Go based",
    description:
      "Harness the power of Go to build robust, type-safe applications. Every component and hook exports types, ensuring reliability and confidence.",
  },
  {
    icon: IconClock,
    title: "No waste in time",
    description:
      "Time is precious, and Too-Doo respects that. With our approach eliminate unnecessary distractions and allowing you to stay focused on what truly matters: your tasks",
  },
  {
    icon: IconPalette,
    title: "Flexible",
    description:
      "Customize Too-Doo effortlessly to suit your preferences. Simply clone the repository and tweak everything—from colors and spacing to shadows and fonts. With this level of control, tailor your task management experience to reflect your unique style and workflow.",
  },
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius='md'
        variant='gradient'
        gradient={{ deg: 133, from: "blue", to: "purple" }}
      >
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text fz='lg' mt='sm' fw={500}>
        {feature.title}
      </Text>
      <Text c='dimmed' fz='sm'>
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Grid gutter={80}>
      <Grid.Col span={{ base: 12, md: 5 }}>
        <Title className={classes.title} order={2}>
          Streamline Your Task Management with Too-Doo CLI
        </Title>
        <Text c='dimmed'>
          Take control of your productivity with Too-Doo CLI, the command-line
          application designed to streamline your task management process. Add,
          delete, complete, and view tasks effortlessly directly from your
          terminal, empowering you to stay organized and focused on what matters
          most.
        </Text>

        <Button
          variant='gradient'
          gradient={{ deg: 133, from: "blue", to: "purple" }}
          size='lg'
          radius='md'
          mt='xl'
        >
          Get started
        </Button>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 7 }}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
          {items}
        </SimpleGrid>
      </Grid.Col>
    </Grid>
  );
}
