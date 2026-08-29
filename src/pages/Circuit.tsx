import type React from "react";
import {
  Crown,
  Gem,
  Snowflake,
  Sparkles,
  Trophy,
} from "lucide-react";

import {
  circuitCups,
  circuitDescription,
  cupChampionRewards,
  cupRunnerUpRewards,
  cupThirdPlaceRewards,
  grandChampionLore,
  grandChampionRewards,
} from "../data/circuit";

import SectionHeader from "../components/SectionHeader";

export default function Circuit() {
  return (
    <div className="page circuit-page">
      <div className="circuit-hero">
        <div className="circuit-icon">
          <Snowflake size={30} />
        </div>

        <div>
          <div className="section-eyebrow">
            SEASON 2 / CHAMPIONSHIP SERIES
          </div>

          <h1>
            THE CHAMPIONSHIP CIRCUIT
          </h1>

          <p>
            A new age dawns upon
            CobbleAsia.
          </p>
        </div>
      </div>

      <section className="panel circuit-description">
        <SectionHeader
          eyebrow="THE CIRCUIT"
          title="Eight Cups. One Champion."
        />

        <p>
          {circuitDescription}
        </p>
      </section>

      <section>
        <SectionHeader
          eyebrow="SEASON 2"
          title="Championship Cups"
        />

        <div className="circuit-grid">
          {circuitCups.map((cup) => (
            <div
              className="circuit-card"
              key={cup.id}
            >
              <div className="cup-number">
                {String(cup.number).padStart(
                  2,
                  "0"
                )}
              </div>

              <div className="cup-icon">
                {cup.number === 7 ? (
                  <Crown size={24} />
                ) : cup.number === 8 ? (
                  <Gem size={24} />
                ) : cup.number === 5 ? (
                  <Sparkles size={24} />
                ) : (
                  <Snowflake size={24} />
                )}
              </div>

              <h3>{cup.name}</h3>

              <span className="coming-badge">
                COMING SOON
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="reward-section">
        <SectionHeader
          eyebrow="CUP CHAMPIONS"
          title="Champion Rewards"
        />

        <RewardList
          icon={<Trophy size={21} />}
          rewards={cupChampionRewards}
        />
      </section>

      <section className="reward-section">
        <SectionHeader
          eyebrow="CUP RUNNER-UP"
          title="Runner-Up Rewards"
        />

        <RewardList
          rewards={cupRunnerUpRewards}
        />
      </section>

      <section className="reward-section">
        <SectionHeader
          eyebrow="CUP THIRD PLACE"
          title="Third Place Rewards"
        />

        <RewardList
          rewards={cupThirdPlaceRewards}
        />
      </section>

      <section className="grand-championship">
        <div className="grand-header">
          <Crown size={32} />

          <div>
            <div className="section-eyebrow">
              AFTER ALL EIGHT CUPS
            </div>

            <h2>
              SEASON 2 GRAND CHAMPIONSHIP
            </h2>
          </div>
        </div>

        <p>
          After all eight Championship Cups
          have concluded, the champions will
          face one another in the ultimate
          battle to determine who truly stands
          above all others.
        </p>

        <p>
          Only <strong>one</strong> trainer
          will claim the title of Season 2
          Grand Champion.
        </p>

        <div className="grand-rewards">
          <h3>
            GRAND CHAMPION REWARDS
          </h3>

          <RewardList
            rewards={grandChampionRewards}
          />
        </div>

        <div className="unknown-pokemon">
          <div className="unknown-symbol">
            ???
          </div>

          <h3>UNKNOWN</h3>

          <div className="lore">
            {grandChampionLore
              .trim()
              .split("\n\n")
              .map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function RewardList({
  rewards,
  icon,
}: {
  rewards: string[];
  icon?: React.ReactNode;
}) {
  return (
    <div className="reward-grid">
      {rewards.map((reward) => (
        <div
          className="reward-item"
          key={reward}
        >
          {icon || (
            <span className="reward-dot">
              ◆
            </span>
          )}

          <span>{reward}</span>
        </div>
      ))}
    </div>
  );
}