import { useMemo, useState } from "react";

import CompetitionModal from "../components/CompetitionModal";
import SectionHeader from "../components/SectionHeader";
import WinnerHero from "../components/WinnerHero";

type Category =
  | "event"
  | "tournament"
  | "gamenight";

type Props = {
  category: Category;
  items: any[];
};

function formatDate(date?: string) {
  if (!date) return "DATE TBA";

  return new Date(
    `${date}T00:00:00`
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function CompetitionPage({
  category,
  items,
}: Props) {
  const [selected, setSelected] =
    useState<any | null>(null);

  const completed = useMemo(
    () =>
      items.filter(
        (item) =>
          item.status === "completed"
      ),
    [items]
  );

  const upcoming = useMemo(
    () =>
      items.filter(
        (item) =>
          item.status === "upcoming"
      ),
    [items]
  );

  const latest = completed[0];
  const latestWinner =
    latest?.winners?.[0];

  const title =
    category === "event"
      ? "Events"
      : category === "tournament"
      ? "Tournaments"
      : "Gamenights";

  return (
    <div className="page competition-page">
      <div className="page-title">
        <div className="section-eyebrow">
          COBBLEASIA / {category.toUpperCase()}
        </div>

        <h1>{title}</h1>

        <p>
          Explore upcoming competitions,
          recent champions and the complete
          {category} archive.
        </p>
      </div>

      {latest && latestWinner ? (
        <>
          <SectionHeader
            eyebrow="LATEST CHAMPION"
            title="The Latest Winner"
          />

          <WinnerHero
            category={category}
            title={latest.name}
            username={
              latestWinner.username
            }
            quote={latestWinner.quote}
            skinUrl={
              latestWinner.skinUrl
            }
          />

          {completed.length > 1 && (
            <section>
              <SectionHeader
                eyebrow="RECENT CHAMPIONS"
                title="Previous Winners"
              />

              <div className="previous-winners">
                {completed
                  .slice(1, 3)
                  .map((item) => {
                    const winner =
                      item.winners?.[0];

                    return (
                      <div
                        className={`previous-winner-card ${category}`}
                        key={item.id}
                      >
                        <div className="previous-winner-place">
                          {winner
                            ? "CHAMPION"
                            : "NO WINNER"}
                        </div>

                        <strong>
                          {winner?.username ||
                            "Unknown"}
                        </strong>

                        <span>
                          {item.name}
                        </span>

                        <small>
                          {formatDate(
                            item.date
                          )}
                        </small>
                      </div>
                    );
                  })}
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="panel no-history">
          <div className="empty-state">
            <span>◇</span>
            <strong>
              NO COMPLETED {category.toUpperCase()}S
            </strong>
            <small>
              Results will appear here once
              the first competition concludes.
            </small>
          </div>
        </div>
      )}

      <section>
        <SectionHeader
          eyebrow="SCHEDULE"
          title={`Upcoming ${title}`}
        />

        {upcoming.length === 0 ? (
          <div className="panel">
            <div className="empty-state">
              <span>◇</span>

              <strong>
                NO {category.toUpperCase()}S
                SCHEDULED
              </strong>

              <small>
                Check back soon for the next
                CobbleAsia competition.
              </small>
            </div>
          </div>
        ) : (
          <div className="competition-list">
            {upcoming.map((item) => (
              <button
                key={item.id}
                className={`competition-row ${category}`}
                onClick={() =>
                  setSelected(item)
                }
              >
                <div className="competition-date">
                  <strong>
                    {item.date
                      ? new Date(
                          `${item.date}T00:00:00`
                        ).getDate()
                      : "—"}
                  </strong>

                  <span>
                    {item.date
                      ? new Date(
                          `${item.date}T00:00:00`
                        ).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                          }
                        ).toUpperCase()
                      : "TBA"}
                  </span>
                </div>

                <div className="competition-name">
                  <strong>
                    {item.name}
                  </strong>

                  <span>
                    {item.format ||
                      "Details available inside"}
                  </span>
                </div>

                <div className="competition-time">
                  {item.time ||
                    "DATE SET"}
                </div>

                <span className="row-arrow">
                  →
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      <section>
        <SectionHeader
          eyebrow="ARCHIVE"
          title={`Past ${title}`}
        />

        {completed.length === 0 ? (
          <div className="panel">
            <div className="empty-state">
              <span>◇</span>
              <strong>
                NO PAST {category.toUpperCase()}S
              </strong>
            </div>
          </div>
        ) : (
          <div className="competition-list">
            {completed.map((item) => (
              <button
                key={item.id}
                className={`competition-row past ${category}`}
                onClick={() =>
                  setSelected(item)
                }
              >
                <div className="past-date">
                  {formatDate(item.date)}
                </div>

                <div className="competition-name">
                  <strong>
                    {item.name}
                  </strong>

                  <span>
                    Winner:{" "}
                    {item.winners?.[0]
                      ?.username ||
                      "Not recorded"}
                  </span>
                </div>

                <span className="row-arrow">
                  →
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      {selected && (
        <CompetitionModal
          item={selected}
          category={category}
          onClose={() =>
            setSelected(null)
          }
        />
      )}
    </div>
  );
}