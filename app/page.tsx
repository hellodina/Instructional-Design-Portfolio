"use client";

import { useState } from "react";
import Sidebar from "../components/portfolio/Sidebar";
import HomePage from "../components/portfolio/HomePage";
import WebDevPage from "../components/portfolio/WebDevPage";
import GameDesignPage from "../components/portfolio/GameDesignPage";
import CreativeCodingPage from "../components/portfolio/CreativeCodingPage";
import ARFoundationsPage from "../components/portfolio/ARFoundationsPage";
import RoboticsPage from "../components/portfolio/RoboticsPage";

export default function Home() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "webdev":
        return <WebDevPage />;
      case "gamedesign":
        return <GameDesignPage />;
      case "creativecoding":
        return <CreativeCodingPage />;
      case "ar":
        return <ARFoundationsPage />;
      case "robotics":
        return <RoboticsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <main className="flex-1 ml-64 bg-white">
        {renderPage()}
      </main>
    </div>
  );
}
