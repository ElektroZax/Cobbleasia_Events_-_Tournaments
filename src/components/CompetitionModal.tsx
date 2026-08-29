import { X, ExternalLink } from "lucide-react";

type Category =
  | "event"
  | "tournament"
  | "gamenight";

type PlacementReward = {
  place: number;
  items: string[];
};

type Winner = {
  place: number;
  username: string;
  quote?: string;
  skinUrl?: string;
};

type CompetitionItem = {
  id: string;
  name: string;

  status: "upcoming" | "completed";

  date?: string;
  time?: string;

  description: string;

  format?: string;
  theme?: string;
  restriction?: string;
  maxParticipants?: number;

  rewards?: PlacementReward[];

  participation?: string;

  judging?: string[];
  rules?: string[];

  bracket?: string | null;
  submissionInfo?: string;

  winners?: Winner[];
};

type Props = {
  item: CompetitionItem;
  category: Category;
  onClose: () => void;
};


/* =========================================================
   DATE FORMAT
========================================================= */

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


/* =========================================================
   PLACEMENT LABEL
========================================================= */

function getPlaceLabel(place: number) {
  if (place === 0) return "SPECIAL";
  if (place === 1) return "1ST PLACE";
  if (place === 2) return "2ND PLACE";
  if (place === 3) return "3RD PLACE";

  return `${place}TH PLACE`;
}

function getPlaceClass(place: number) {
  if (place === 0) return "reward-place-special";
  if (place === 1) return "reward-place-first";
  if (place === 2) return "reward-place-second";
  if (place === 3) return "reward-place-third";

  return "reward-place-other";
}


/* =========================================================
   COMPETITION MODAL
========================================================= */

export default function CompetitionModal({
  item,
  category,
  onClose,
}: Props) {
  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <div
        className={`competition-modal ${category}`}
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* CLOSE BUTTON */}

        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={18} />
        </button>


        {/* HEADER */}

        <div className="modal-eyebrow">
          {category.toUpperCase()} DETAILS
        </div>

        <h2>{item.name}</h2>

        <div className="modal-date">
          {formatDate(item.date)}

          {item.time && (
            <>
              {" "}
              · {item.time}
            </>
          )}
        </div>


        <div className="modal-content">


          {/* =================================================
             DESCRIPTION
          ================================================= */}

          <section className="modal-section">

            <h3>DESCRIPTION</h3>

            <p>
              {item.description}
            </p>

          </section>


          {/* =================================================
             BASIC INFORMATION
          ================================================= */}

          {(item.format ||
            item.theme ||
            item.restriction ||
            item.maxParticipants) && (

            <section className="modal-section">

              <h3>EVENT INFORMATION</h3>

              <div className="modal-info-grid">

                {item.format && (
                  <div>

                    <span>
                      FORMAT
                    </span>

                    <strong>
                      {item.format}
                    </strong>

                  </div>
                )}


                {item.theme && (
                  <div>

                    <span>
                      THEME
                    </span>

                    <strong>
                      {item.theme}
                    </strong>

                  </div>
                )}


                {item.restriction && (
                  <div>

                    <span>
                      RESTRICTION
                    </span>

                    <strong>
                      {item.restriction}
                    </strong>

                  </div>
                )}


                {item.maxParticipants && (
                  <div>

                    <span>
                      MAX PARTICIPANTS
                    </span>

                    <strong>
                      {item.maxParticipants}
                    </strong>

                  </div>
                )}

              </div>

            </section>
          )}


          {/* =================================================
             REWARDS
          ================================================= */}

          {item.rewards &&
            item.rewards.length > 0 && (

            <section className="modal-section">

              <h3>REWARDS</h3>

              <div className="placement-rewards">

                {item.rewards.map(
                  (reward) => (

                    <div
                      key={reward.place}
                      className={`placement-reward-card ${getPlaceClass(
                        reward.place
                      )}`}
                    >

                      <div className="placement-reward-header">

                        <span className="placement-reward-place">
                          {getPlaceLabel(
                            reward.place
                          )}
                        </span>

                      </div>


                      <ul className="placement-reward-list">

                        {reward.items.map(
                          (
                            rewardItem,
                            index
                          ) => (

                        <li
                        key={`${reward.place}-${index}`}
                        className={
                            rewardItem
                            .toLowerCase()
                            .includes("event crest")
                            ? "event-crest-reward"
                            : ""
                        }
                        >
                        {rewardItem}
                        </li>

                          )
                        )}

                      </ul>

                    </div>

                  )
                )}

              </div>


              {/* PARTICIPATION REWARD */}

              {item.participation && (

                <div className="participation-reward">

                  <span>
                    PARTICIPATION
                  </span>

                  <strong>
                    {item.participation}
                  </strong>

                </div>

              )}

            </section>
          )}


          {/* =================================================
             JUDGING
          ================================================= */}

          {item.judging &&
            item.judging.length > 0 && (

            <section className="modal-section">

              <h3>
                JUDGING CRITERIA
              </h3>

              <ul className="bullet-list">

                {item.judging.map(
                  (criterion) => (

                    <li key={criterion}>
                      {criterion}
                    </li>

                  )
                )}

              </ul>

            </section>
          )}


          {/* =================================================
             RULES
          ================================================= */}

          {item.rules &&
            item.rules.length > 0 && (

            <section className="modal-section">

              <h3>RULES</h3>

              <ul className="bullet-list">

                {item.rules.map(
                  (rule) => (

                    <li key={rule}>
                      {rule}
                    </li>

                  )
                )}

              </ul>

            </section>
          )}


          {/* =================================================
             SUBMISSION
          ================================================= */}

          {item.submissionInfo && (

            <section className="modal-section">

              <h3>SUBMISSION</h3>

              <div className="notice-box">
                {item.submissionInfo}
              </div>

            </section>

          )}


          {/* =================================================
             BRACKET
          ================================================= */}

          <section className="modal-section">

            <h3>BRACKET</h3>

            {item.bracket ? (

              <a
                href={item.bracket}
                target="_blank"
                rel="noreferrer"
                className="bracket-button"
              >

                VIEW BRACKET

                <ExternalLink
                  size={13}
                />

              </a>

            ) : (

              <div className="coming-soon">
                BRACKET COMING SOON
              </div>

            )}

          </section>


          {/* =================================================
             WINNERS
          ================================================= */}

          {item.status === "completed" &&
            item.winners &&
            item.winners.length > 0 && (

            <section className="modal-section">

              <h3>
                WINNERS
              </h3>

              <div className="modal-winners">

                {item.winners.map(
                  (winner) => (

                    <div
                      className={`modal-winner ${getPlaceClass(
                        winner.place
                      )}`}
                      key={`${winner.place}-${winner.username}`}
                    >

                      {/* PLACEMENT */}

                      <strong>
                        {getPlaceLabel(
                          winner.place
                        )}
                      </strong>


                      {/* PLAYER NAME */}

                      <span className="winner-player-name">
                        {winner.username}
                      </span>

                    </div>

                  )
                )}

              </div>

            </section>

          )}

        </div>

      </div>
    </div>
  );
}