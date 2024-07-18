"use client";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./logo.png";
import React from "react";
import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Gaming from "./components/products/gaming";
import Video from "./components/banner/video";
import Gift from "./components/giftcard/gift";
import About from "./components/about/about";
import Home from "./pages/home";
import TermsAndConditions from "./components/termscondition/termsc";
import GamesAccountsSection from "./components/products/gameacct";
import GameKey from "./components/products/gamekey";
import Credits from "./components/products/ingamecred";
import PsGamesSection from "./components/products/psgames";
import XboxGamePassSection from "./components/services/xpass";
import XboxGamesSection from "./components/products/xboxgames";
import SocialMediaBoostingSection from "./components/services/socialboost";
import SocialMediaSponsorSection from "./components/services/socialsponsor";
import NetflixAccountsSection from "./components/services/netflix";
import SpotifyAccountsSection from "./components/services/spotify";
import PSPlusSubscriptionsSection from "./components/services/pspass";
import SoftwareSubscriptionSection from "./components/services/softwares";
import SteamGiftCardSection from "./components/giftcard/steam";
import ITunes from "./components/giftcard/itunes";
import PSNGiftCardSection from "./components/giftcard/psn";
import XboxGiftCardSection from "./components/giftcard/xbox";
import LoginPage from "./components/login&register/login";
import Cart from "./pages/cart";
import dynamic from "next/dynamic";

const Page = () => {
  const MyDynamicComponent = dynamic(() => import("./page"), {
    ssr: false,
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/useragreement" element={<TermsAndConditions />} />
        <Route path="/gameacct" element={<GamesAccountsSection />} />
        <Route path="/gameskey" element={<GameKey />} />
        <Route path="/ingamecred" element={<Credits />} />
        <Route path="/psgames" element={<PsGamesSection />} />
        <Route path="/xboxgames" element={<XboxGamesSection />} />
        <Route path="/xpass" element={<XboxGamePassSection />} />
        <Route path="/socialboost" element={<SocialMediaBoostingSection />} />
        <Route path="/socialsponsor" element={<SocialMediaSponsorSection />} />
        <Route path="/netflix" element={<NetflixAccountsSection />} />
        <Route path="/spotify" element={<SpotifyAccountsSection />} />
        <Route path="/pspass" element={<PSPlusSubscriptionsSection />} />
        <Route path="/softwares" element={<SoftwareSubscriptionSection />} />
        <Route path="/steam" element={<SteamGiftCardSection />} />
        <Route path="/itunes" element={<ITunes />} />
        <Route path="/psn" element={<PSNGiftCardSection />} />
        <Route path="/xbox" element={<XboxGiftCardSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default function MyPage() {
  return typeof window !== "undefined" && <Page />;
}
