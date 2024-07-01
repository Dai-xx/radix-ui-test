"use client";

import {
  Flex,
  Text,
  Button,
  Card,
  Spinner,
  Theme,
  ThemePanel,
  Link,
  Checkbox,
  Switch,
  Badge,
  Progress,
  SegmentedControl,
} from "@radix-ui/themes";
import { useState } from "react";

export default function MyApp() {
  const [selectedValue, setSelectedValue] = useState("inbox");

  const handleChange = (value: any) => {
    setSelectedValue(value);
  };
  console.log("selectedValue", selectedValue);

  return (
    <main className="max-w-7xl mx-auto">
      <Theme accentColor="blue">
        <ThemePanel />
        <Flex direction="column" gap="2">
          <Card className="shadow-1">
            <Text>Hello from Radix Themes :)</Text>
            <Button>Lets go</Button>
            <Spinner />
          </Card>
        </Flex>

        <Flex gap="2">
          <Badge color="orange">In progress</Badge>
          <Badge color="blue">In review</Badge>
          <Badge color="green">Complete</Badge>
        </Flex>

        <Progress />

        <SegmentedControl.Root
          value={selectedValue}
          onValueChange={handleChange}
        >
          <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
          <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
          <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
        </SegmentedControl.Root>

        <Switch radius="small" />
      </Theme>
    </main>
  );
}
