import type React from "react";
import {
  ArrowRight,
  CalendarDays,
  Gamepad2,
  Swords,
} from "lucide-react";

import { events } from "../data/events";
import { tournaments } from "../data/tournaments";
import { gamenights } from "../data/gamenights";

import LeaderboardPreview from "../components/LeaderboardPreview";
import SectionHeader from "../components/SectionHeader";

import type { Page } from "../components/Sidebar";

type Props = {
  setPage: (page: Page) => void;
};

function formatDate(date?: string) {
  if (!date) return "DATE TBA";

  return new Date(
    `${date}T00:00:00`
  ).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Dashboard({
  setPage,
}: Props) {
  const upcomingEvents =
    events.filter(
      (event) =>
        event.status === "upcoming"
    );

  const upcomingTournaments =
    tournaments.filter(
      (item) =>
        item.status === "upcoming"
    );

  const upcomingGamenights =
    gamenights.filter(
      (item) =>
        item.status === "upcoming"
    );

  const latestEvent =
    events.find(
      (event) =>
        event.status === "completed"
    );

  const latestTournament =
    tournaments.find(
      (item) =>
        item.status === "completed"
    );

  const latestGamenight =
    gamenights.find(
      (item) =>
        item.status === "completed"
    );

  return (
    <div className="page dashboard-page">
      <section className="dashboard-intro">
        <div className="intro-mark">
          <img
            src="/calogos1.png"
            alt="CobbleAsia"
            />
        </div>

        <div>
          <div className="section-eyebrow">
            COBBLEASIA SEASON 2
          </div>

          <h2>
            EVENTS AND TOURNAMENTS COMPENDIUM
          </h2>

          <p>
            Follow every event, tournament,
            gamenight and championship
            happening across CobbleAsia.
          </p>
        </div>
      </section>

      <LeaderboardPreview
        onViewAll={() =>
          setPage("leaderboard")
        }
      />

      <div className="dashboard-two-column">
        <section className="panel">
          <SectionHeader
            eyebrow="NEXT UP"
            title="Upcoming Events"
            action="VIEW ALL"
            onAction={() =>
              setPage("events")
            }
          />

          {upcomingEvents.length === 0 ? (
            <EmptyState
              text="NO EVENTS SCHEDULED"
            />
          ) : (
            <div className="upcoming-list">
              {upcomingEvents
                .slice(0, 3)
                .map((event) => (
                  <button
                    className="upcoming-item event-item"
                    key={event.id}
                    onClick={() =>
                      setPage("events")
                    }
                  >
                    <CalendarDays
                      size={19}
                    />

                    <div>
                      <strong>
                        {event.name}
                      </strong>

                      <span>
                        {formatDate(
                          event.date
                        )}
                      </span>
                    </div>

                    <ArrowRight
                      size={17}
                    />
                  </button>
                ))}
            </div>
          )}
        </section>

        <section className="panel">
          <SectionHeader
            eyebrow="NEXT UP"
            title="Upcoming Tournaments"
            action="VIEW ALL"
            onAction={() =>
              setPage("tournaments")
            }
          />

          {upcomingTournaments.length ===
          0 ? (
            <EmptyState
              text="NO TOURNAMENTS SCHEDULED"
            />
          ) : (
            <div className="upcoming-list">
              {upcomingTournaments
                .slice(0, 3)
                .map((item) => (
                  <button
                    className="upcoming-item tournament-item"
                    key={item.id}
                    onClick={() =>
                      setPage(
                        "tournaments"
                      )
                    }
                  >
                    <Swords size={19} />

                    <div>
                      <strong>
                        {item.name}
                      </strong>

                      <span>
                        {formatDate(
                          item.date
                        )}
                      </span>
                    </div>

                    <ArrowRight
                      size={17}
                    />
                  </button>
                ))}
            </div>
          )}
        </section>
      </div>

      <section className="panel">
        <SectionHeader
          eyebrow="COMMUNITY"
          title="Upcoming Gamenights"
          action="VIEW ALL"
          onAction={() =>
            setPage("gamenights")
          }
        />

        {upcomingGamenights.length ===
        0 ? (
          <EmptyState
            icon={<Gamepad2 size={28} />}
            text="NO GAMENIGHTS SCHEDULED"
          />
        ) : (
          <div className="upcoming-list">
            {upcomingGamenights
              .slice(0, 3)
              .map((item) => (
                <button
                  className="upcoming-item gamenight-item"
                  key={item.id}
                  onClick={() =>
                    setPage("gamenights")
                  }
                >
                  <Gamepad2 size={19} />

                  <div>
                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      {formatDate(
                        item.date
                      )}
                    </span>
                  </div>

                  <ArrowRight
                    size={17}
                  />
                </button>
              ))}
          </div>
        )}
      </section>

      <section>
        <SectionHeader
          eyebrow="RECENT HISTORY"
          title="Latest Winners"
        />

        <div className="latest-winners-grid">
          <LatestWinnerCard
            type="event"
            winner={
              latestEvent?.winners?.[0]
                ?.username
            }
            title={latestEvent?.name}
          />

          <LatestWinnerCard
            type="tournament"
            winner={
              latestTournament
                ?.winners?.[0]
                ?.username
            }
            title={latestTournament?.name}
          />

          <LatestWinnerCard
            type="gamenight"
            winner={
              latestGamenight
                ?.winners?.[0]
                ?.username
            }
            title={latestGamenight?.name}
          />
        </div>
      </section>
    </div>
  );
}

function EmptyState({
  text,
  icon,
}: {
  text: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="empty-state">
      <span>
        {icon || "◇"}
      </span>

      <strong>{text}</strong>

      <small>
        Check back soon.
      </small>
    </div>
  );
}

function LatestWinnerCard({
  type,
  winner,
  title,
}: {
  type:
    | "event"
    | "tournament"
    | "gamenight";
  winner?: string;
  title?: string;
}) {
  return (
    <div
      className={`latest-winner-card ${type}`}
    >
      <div className="category-tag">
        {type === "event"
          ? "EVENT"
          : type === "tournament"
          ? "TOURNAMENT"
          : "GAMENIGHT"}
      </div>

      {winner ? (
        <>
          <strong className="latest-winner-name">
            {winner}
          </strong>

          <span className="latest-winner-title">
            {title}
          </span>
        </>
      ) : (
        <span className="not-available">
          No winner recorded
        </span>
      )}
    </div>
  );
}
