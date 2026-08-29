export type CircuitCup = {
  id: string;
  number: number;
  name: string;
  status: "coming-soon";
};

export const circuitDescription = `
Throughout Season 2, trainers will battle across eight prestigious Championship Cups, each serving as a stepping stone toward the ultimate prize—the Season 2 Grand Championship.

Only the champions of each Cup will earn their place in the final tournament, where a single trainer will be crowned the Season 2 Grand Champion.
`;

export const circuitCups: CircuitCup[] = [
  {
    id: "frostbound",
    number: 1,
    name: "Frostbound Cup",
    status: "coming-soon",
  },
  {
    id: "blizzard",
    number: 2,
    name: "Blizzard Cup",
    status: "coming-soon",
  },
  {
    id: "glacier",
    number: 3,
    name: "Glacier Cup",
    status: "coming-soon",
  },
  {
    id: "cryo",
    number: 4,
    name: "Cryo Cup",
    status: "coming-soon",
  },
  {
    id: "twilight",
    number: 5,
    name: "Twilight Cup",
    status: "coming-soon",
  },
  {
    id: "stormbreaker",
    number: 6,
    name: "Stormbreaker Cup",
    status: "coming-soon",
  },
  {
    id: "crown",
    number: 7,
    name: "Crown Cup",
    status: "coming-soon",
  },
  {
    id: "eternal-winter",
    number: 8,
    name: "Eternal Winter Cup",
    status: "coming-soon",
  },
];

export const cupChampionRewards = [
  "Exclusive In-Game Champion Title — unique to each Cup",
  "2,500,000 Coins",
  "$30 USD",
  "1 Shiny Legendary or Mythical Spin — Winner's Choice",
  "1 Master IV Modifier",
  "2 Ability Patches",
  "1 Basic IV Modifier",
  "2 Random IV Modifiers",
  "Season 2 Claim Blocks",
  "Permanent Hall of Fame Induction",
];

export const cupRunnerUpRewards = [
  "1,750,000 Coins",
  "1 Shiny Mythical Spin — Winner's Choice",
  "1 Basic IV Modifier",
  "1 Ability Patch",
  "2 Random IV Modifiers",
];

export const cupThirdPlaceRewards = [
  "1,000,000 Coins",
  "1 Shiny Ultra Beast Spin",
  "2 Random IV Modifiers",
];

export const grandChampionRewards = [
  "$85 USD",
  "Exclusive Grand Champion Title",
  "Permanent Hall of Legends Induction",
  "Exclusive Season 2 Grand Champion Pokémon — Unknown",
];

export const grandChampionLore = `
Beneath an ancient kingdom swallowed by eternal frost, something still slumbers...

Its existence has been erased from history, leaving behind only fragments of forgotten legends.

When the final champion rises, the seal shall finally break...

The Grand Champion won't simply earn a reward...

They will become the first trainer in history to awaken the mystery hidden beneath the frozen world.

Further details regarding this Pokémon will remain classified until the Grand Championship.
`;