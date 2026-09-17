
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services"
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FadeUp from "../components/FadeUp";
import PopupWidget from "../components/popupWidget";
import ScrollToTop from "../components/ScrollToTop";
import Wecare from "../components/Wecare";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import WhatsappWidget from "../components/WhatsappWidget";
import BusinessCategories from "../components/BusinessCard";
import Founder from "../components/Founder";
import SocialMediaPage from "../components/socialmedia";
export default function Main() {
  return (
    <>

      <Navbar />
      <PopupWidget />
      <WhatsappWidget />
      <ScrollToTop />
      <Home />
      <Wecare />
      <Carousel/>
      <Founder/>
      <BusinessCategories/>
      <Services />
      <SocialMediaPage/>
      <Contact />
      <Footer />
      <FadeUp />
    </>
  );
}
