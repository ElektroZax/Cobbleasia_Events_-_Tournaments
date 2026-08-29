import { players } from "../data/players";
import SectionHeader from "../components/SectionHeader";

export default function Leaderboard() {
  const leaderboard = [...players].sort(
    (a, b) => b.crests - a.crests
  );

  return (
    <div className="page leaderboard-page">
      {/* =========================================================
          PAGE HEADER
      ========================================================= */}

      <div className="page-title">
        <div className="section-eyebrow">
          COBBLEASIA / HALL OF FAME
        </div>

        <h1>EVENT CREST LEADERBOARD</h1>

        <p>
          Every Event Crest earned across
          CobbleAsia events and tournaments.
        </p>
      </div>


      {/* =========================================================
          LEADERBOARD
      ========================================================= */}

      <section className="panel leaderboard-panel">
        <SectionHeader
          eyebrow={`${leaderboard.length} PLAYERS`}
          title="All-Time Crest Rankings"
        />

        {leaderboard.length === 0 ? (
          <div className="empty-state">
            <span>◇</span>

            <strong>
              NO CRESTS RECORDED
            </strong>

            <small>
              The leaderboard will appear once
              players earn Event Crests.
            </small>
          </div>
        ) : (
          <div className="full-leaderboard">
            {leaderboard.map(
              (player, index) => (
                <div
                  key={player.id}
                  className={`full-rank-row rank-${
                    index + 1
                  }`}
                >
                  <div className="full-rank">
                    #{index + 1}
                  </div>

                  <img
                    className="player-head"
                    src={
                      player.skinUrl ||
                      `https://mc-heads.net/avatar/${encodeURIComponent(
                        player.username
                      )}/64`
                    }
                    alt=""
                  />

                  <div className="full-player-name">
                    {player.username}
                  </div>

                  <div className="full-crests">
                    <strong>
                      {player.crests}
                    </strong>

                    <span>
                      EVENT CRESTS
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </section>


      {/* =========================================================
          EVENT CRESTS INFORMATION
          Kept at the bottom so the leaderboard remains the focus.
      ========================================================= */}

      <section className="crest-info-section">

        <div className="crest-info-header">
          <div>
            <div className="section-eyebrow">
              COBBLEASIA SEASON 2
            </div>

            <h2>Introducing Event Crests</h2>
          </div>

          <div className="crest-badge">
            🏅
          </div>
        </div>


        <div className="crest-info-intro">
          <strong>Event Crests</strong> are a new
          seasonal reward system for CobbleAsia
          Season 2.
        </div>


        <div className="crest-info-grid">

          {/* EARN */}

          <div className="crest-info-card">
            <div className="crest-card-icon">
              🏅
            </div>

            <div>
              <h3>Earn Crests</h3>

              <p>
                Participate in official events
                and tournaments to earn Event
                Crests.
              </p>
            </div>
          </div>


          {/* CLIMB */}

          <div className="crest-info-card">
            <div className="crest-card-icon">
              📈
            </div>

            <div>
              <h3>Climb the Leaderboard</h3>

              <p>
                Your total Crest count determines
                your position throughout Season 2.
              </p>
            </div>
          </div>


          {/* REWARDS */}

          <div className="crest-info-card">
            <div className="crest-card-icon">
              👑
            </div>

            <div>
              <h3>End-of-Season Rewards</h3>

              <p>
                Top-ranked players will receive
                exclusive rewards based on their
                final Crest totals.
              </p>
            </div>
          </div>

        </div>


        {/* FINAL CALLOUT */}

        <div className="crest-info-footer">
          <div className="crest-footer-title">
            EVERY CREST COUNTS.
          </div>
        </div>

      </section>

    </div>
  );
}