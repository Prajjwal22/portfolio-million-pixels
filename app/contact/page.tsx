import ContactForm from "@/components/Contact/ContactForm";
import FeedbackForm from "@/components/Contact/FeedbackForm";
import Hero from "@/components/Contact/Hero";
import Info from "@/components/Contact/Info";
import Social from "@/components/Contact/Social";
import Footer from "@/components/Footer";
import React from "react";

export default function ContactPage() {
  return (
    <>
      {/* <Hero /> */}
      <Info />
      <Social />
      <ContactForm />
      <FeedbackForm />
    </>
  );
}
