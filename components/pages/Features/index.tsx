import React from "react";
import { FeaturesPageProps } from "../index";
import Section from "$/atoms/section";
import NavBar from "$/NavBar";
import HeroSection from "$/Section/Hero";
import FeatureSection from "$/Section/Features";
import Testimonials from "$/Section/Testimonials";
import Faq from "$/Section/Faq";
import Footer from "$/Section/Footer";
import ContactSection from "$/Section/Contact";
import Page from "$/Page";

const FeaturesPage: React.FC<FeaturesPageProps> = ({
  nav,
  hero,
  featureGrid,
  featureRight,
  featureLeft,
  testimonials,
  faq,
  contact,
  footer,
}) => {
  return (
    <Page>
      <NavBar {...nav} />
      <Section classes="flex flex-col bg-white">
        <HeroSection {...hero} />
        <FeatureSection {...featureGrid} />
        <FeatureSection {...featureRight} />
        <FeatureSection {...featureLeft} />
        <Testimonials {...testimonials} />
        <Faq {...faq} />
        <ContactSection {...contact} />
        <Footer {...footer} classes="py-[16px] px-[16px]" />
      </Section>
    </Page>
  );
};

export default FeaturesPage;
