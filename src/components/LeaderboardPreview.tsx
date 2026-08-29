import { players } from "../data/players";

type Props = {
  onViewAll: () => void;
};

export default function LeaderboardPreview({
  onViewAll,
}: Props) {
  const leaderboard = [...players]
    .sort((a, b) => b.crests - a.crests)
    .slice(0, 10);

  return (
    <section className="panel leaderboard-panel">
      <div className="panel-top">
        <div>
          <div className="section-eyebrow">
            HALL OF CRESTS
          </div>

          <h2>Event Crest Leaderboard</h2>
        </div>

        <button
          className="text-button"
          onClick={onViewAll}
        >
          VIEW ALL →
        </button>
      </div>

      <div className="leaderboard">
        {leaderboard.length === 0 ? (
          <div className="empty-state compact">
            <span>◇</span>
            <strong>
              NO CRESTS RECORDED
            </strong>
          </div>
        ) : (
          leaderboard.map(
            (player, index) => (
              <div
                key={player.id}
                className={`leaderboard-row rank-${
                  index + 1
                }`}
              >
                <span className="rank">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span className="rank-player">
                  {player.username}
                </span>

                <strong className="crest-count">
                  {player.crests}
                  <span> CRESTS</span>
                </strong>
              </div>
            )
          )
        )}
      </div>
    </section>
  );
}