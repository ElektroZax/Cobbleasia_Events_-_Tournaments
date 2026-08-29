export type Gamenight = {
  id: string;
  name: string;
  status: "upcoming" | "completed";
  date?: string;
  time?: string;
  description: string;
  format?: string;
  rulesInfo?: string;
  registrationInfo?: string;
  rewards: string[];
  bracket?: string | null;

  winners?: {
    place: number;
    username: string;
    quote?: string;
  }[];

  specialMentions?: string[];
  finaleUrl?: string;
};


export const gamenights: Gamenight[] = [
  {
    id: "gamenight-3-imperium",

    name: "Game Night #3 – Champion's Draft: Imperium",

    status: "completed",

    description:
      "Champion's Draft: Imperium is a strategic auction-based event where players build teams by bidding on Pokémon, manage their credits, and battle through multiple phases to earn rewards and become the Champion.",

    time: "9:00 PM GMT+8",

    format:
      "Auction-based Pokémon team building and multi-phase battles",

    rulesInfo:
      "The complete rules, mechanics, and event format were provided in the Game Night registration channel.",

    registrationInfo:
      "Registrations were handled through the Game Night registration channel.",

    rewards: [],

    bracket: null,

    winners: [
      {
        place: 1,
        username: "TheGreatJenish",
        quote:
          "Either give up at the very begining or never give up",
      },

      {
        place: 2,
        username: "Deathox",
      },
    ],

    specialMentions: [
      "Phase 1 Winner: TheGreatJenish",
      "Phase 2 Winner: TheGreatJenish",
    ],

    finaleUrl:
      "https://play.pokemonshowdown.com/battle-gen9nationaldexag-2670911864",
  },
];
