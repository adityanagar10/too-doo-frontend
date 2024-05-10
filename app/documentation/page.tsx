"use client";

import { Text, Code, List } from "@mantine/core";
import classes from "./page.module.css";

export default function Documentation() {
  return (
    <>
      <Text className={classes.title}>Documentation</Text>
      <Text className={classes.subtitle}>Overview</Text>
      <Text>
        Welcome to the comprehensive documentation hub for Too-Doo CLI! Here,
        you will uncover detailed guides, step-by-step tutorials, and thorough
        API references, meticulously crafted to elevate your proficiency with
        Too-Doo CLI to new heights.
      </Text>
      <Text className={classes.subtitle}>Installation</Text>
      <Text>
        At present, our installation process exclusively supports Homebrew for
        seamless command-line integration. Fear not! The binaries you seek are
        just a click away. Let us delve into installing Too-Doo via Homebrew, a
        process as straightforward as:
      </Text>
      <Code block>
        {`
brew tap adityanagar10/adityanagar10
brew install adityanagar10/adityanagar10/too-doo
        `}
      </Code>
      <Text>And voilà! You are all set to embark on your Too-Doo journey.</Text>
      <Text className={classes.subtitle}>Usage</Text>
      <List>
        <List.Item>
          <Text>
            <Code block>too-doo --help</Code>
            To kickstart your Too-Doo experience, invoke the command. It offers
            an exhaustive compendium of commands, each accompanied by detailed
            descriptions for seamless navigation and comprehension.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Code block>too-doo add</Code>
            Adding Tasks: Utilize, followed by a succinct message, to append a
            new task to your to-do list effortlessly.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Code block>too-doo complete TaskID</Code>
            Marking Tasks as Complete: Indicate task completion with , appending
            the unique ID for the task for streamlined task management.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Code block>too-doo delete TaskID</Code>
            Deleting Tasks: Eradicate a task swiftly using , specifying its
            unique task ID. Once removed, tasks are irretrievable, ensuring your
            list remains clutter-free and efficient.
          </Text>
        </List.Item>
        <List.Item>
          <Text>
            <Code block>too-doo list</Code>
            Listing Available Tasks: Gain instant access to all available to-dos
            with the succinct command, providing a comprehensive overview of
            your tasks at a glance.
          </Text>
        </List.Item>
      </List>
    </>
  );
}
