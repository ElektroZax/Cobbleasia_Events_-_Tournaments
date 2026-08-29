type WinnerHeroProps = {
  category: "event" | "tournament" | "gamenight";
  title: string;
  username: string;
  quote?: string;
  skinUrl?: string;
};

export default function WinnerHero({
  category,
  title,
  username,
  quote,
  skinUrl,
}: WinnerHeroProps) {
  return (
    <div
      className={`winner-hero ${category}`}
    >
      <div className="winner-skin-wrap">
        <img
          src={
            skinUrl ||
            `https://mc-heads.net/body/${encodeURIComponent(
              username
            )}/250`
          }
          alt={`${username} Minecraft skin`}
          className="winner-skin"
        />
      </div>

      <div className="winner-info">
        <div className="winner-label">
          LATEST {category.toUpperCase()} WINNER
        </div>

        <h2>{username}</h2>

        <div className="winner-title">
          {title}
        </div>

        {quote ? (
          <blockquote>
            “{quote}”
          </blockquote>
        ) : (
          <blockquote className="muted-quote">
            No winner quote provided.
          </blockquote>
        )}
      </div>
    </div>
  );
}