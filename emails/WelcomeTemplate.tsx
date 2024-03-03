import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Tailwind,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome abroad!</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="font-bold text-3xl"> Hello {name}</Text>
            <Link href="https://admin.radix.et">www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};
const heading: CSSProperties = {};
export default WelcomeTemplate;
