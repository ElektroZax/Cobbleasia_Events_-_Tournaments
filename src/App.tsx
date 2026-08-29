import { useState } from "react";

import Sidebar, {
  type Page,
} from "./components/Sidebar";

import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import CompetitionPage from "./pages/CompetitionPage";
import Circuit from "./pages/Circuit";
import Leaderboard from "./pages/Leaderboard";
import FAQ from "./pages/FAQ";

import { events } from "./data/events";
import { tournaments } from "./data/tournaments";
import { gamenights } from "./data/gamenights";

export default function App() {
  const [page, setPage] =
    useState<Page>("dashboard");

  function renderPage() {
    switch (page) {
      case "events":
        return (
          <CompetitionPage
            category="event"
            items={events}
          />
        );

      case "tournaments":
        return (
          <CompetitionPage
            category="tournament"
            items={tournaments}
          />
        );

      case "gamenights":
        return (
          <CompetitionPage
            category="gamenight"
            items={gamenights}
          />
        );

      case "circuit":
        return <Circuit />;

      case "leaderboard":
        return <Leaderboard />;

      case "faq":
        return <FAQ />;

      default:
        return (
          <Dashboard
            setPage={setPage}
          />
        );
    }
  }

  return (
    <div className="app">
      <Sidebar
        page={page}
        setPage={setPage}
      />

      <main className="main">
        <Header />

        {renderPage()}
      </main>
    </div>
  );
}