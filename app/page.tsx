"use client";

import { Container } from "@mantine/core";
import { FeaturesTitle } from "./components/features/Features";
import { HeaderMenu } from "./components/header/Header";
import HeroBullets from "./components/hero/Hero";
import { FooterSimple } from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <HeroBullets />
      <FeaturesTitle />
    </>
  );
}
