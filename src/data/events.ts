/*
============================================================
COBBLEASIA EVENTS DATA FORMAT
============================================================

HOW TO ADD OR UPDATE AN EVENT:

1. Add a new object inside the `events` array.

2. REQUIRED FIELDS:
   id:
     Unique lowercase ID using hyphens.
     Example: "winter-festival"

   name:
     Full event name.
     Example: "The Winter Festival"

   status:
     Use ONLY:
       "upcoming"
       "completed"

   description:
     Full description of the event.

   rewards:
     Rewards MUST be grouped by placement.

     Format:
       rewards: [
         {
           place: 1,
           items: [
             "Reward 1",
             "Reward 2",
             "Reward 3",
           ],
         },
         {
           place: 2,
           items: [
             "Reward 1",
             "Reward 2",
           ],
         },
         {
           place: 3,
           items: [
             "Reward 1",
           ],
         },
       ]

     `place: 1` = 1st Place
     `place: 2` = 2nd Place
     `place: 3` = 3rd Place

     You may use only the placements that actually exist.
     DO NOT put "1st —" or "2nd —" inside the reward strings.
     The website adds the placement automatically.

   participation:
     Optional participation reward.
     Example:
       participation: "200k + 2× Event Crests"

3. OPTIONAL EVENT FIELDS:

   date:
     Format: "YYYY-MM-DD"
     Example: "2026-09-05"

   time:
     Example: "8:00 PM GMT+8"

   format:
     Example: "Build Competition"

   theme:
     Example: "Winds of Winter"

   maxParticipants:
     Example: 32

   judging:
     Array of judging criteria.

   rules:
     Array of event rules.

   bracket:
     Put the bracket URL here when available.
     Until then use:
       bracket: null

   submissionInfo:
     Information about where/how players submit.

4. WHEN AN EVENT IS FINISHED:

   Change:
     status: "upcoming"

   TO:
     status: "completed"

   Then add:
     winners: [
       {
         place: 1,
         username: "PlayerName",
         quote: "Optional quote",
         skinUrl: "Optional Minecraft skin URL",
       },
       {
         place: 2,
         username: "PlayerName",
       },
       {
         place: 3,
         username: "PlayerName",
       },
     ]

5. TO UPDATE REWARDS:

   ONLY edit the `items` array belonging to the correct placement.

   Example:
     {
       place: 1,
       items: [
         "2 Million Coins",
         "5× Event Crests",
       ],
     }

6. DO NOT change the data structure.
   The website components are built around this exact format.

============================================================
*/


export type Winner = {
  place: number;
  username: string;
  quote?: string;
  skinUrl?: string;
};

export type PlacementReward = {
  place: number;
  items: string[];
};

export type EventItem = {
  id: string;
  name: string;

  status: "upcoming" | "completed";

  date?: string;
  time?: string;

  description: string;

  format?: string;
  theme?: string;
  maxParticipants?: number;

  rewards: PlacementReward[];

  participation?: string;

  judging?: string[];
  rules?: string[];

  bracket?: string | null;

  submissionInfo?: string;

  winners?: Winner[];
};


export const events: EventItem[] = [
  {
    id: "arctis-build-off",

    name: "The Arctis Build-Off",

    status: "upcoming",

    date: "2026-09-05",

    description:
      "The winds are changing, winter is here, and it's time to put your building skills to the test! You've got 2 weeks to create your ultimate winter-themed masterpiece. Build a frozen kingdom, an abandoned winter village, an icy Pokémon sanctuary, a fortress buried in snow — or anything else your imagination can create.",

    format: "Build Competition",

    theme: "Winds of Winter",

    rewards: [
      {
        place: 1,

        items: [
          "1.69 Million Coins",
          "50× Event Crests",
          "10,000 Claimblocks",
          "1× Shiny Legendary/Mythical Spin OR Legendary of choice",
          "10× Orbs",
          "5× Origin Crate Keys",
          "3× Legacy Crate Keys",
        ],
      },

      {
        place: 2,

        items: [
          "1 Million Coins",
          "30× Event Crests",
          "5,000 Claimblocks",
          "1× Legendary/Mythical Spin",
          "5× Orbs",
          "3× Origin Crate Keys",
          "1× Legacy Crate Key",
        ],
      },
    ],

    participation:
      "200k + 15× Event Crests",

    judging: [
      "Concept and Creativity [LORE]",
      "Theme Integration",
      "Build Quality & Detail",
      "Composition",
      "Overall Presentation",
    ],

    rules: [
      "Your build must follow the “Winds of Winter” theme.",
      "Builds must be created during the 2-week competition period.",
      "Copying another player's build is not allowed.",
      "Team builds are allowed, but the reward is shared and submission is still individual.",
      "Keep all builds appropriate for Cobble Asia.",
      "Your build must be completed before judging on 5th September.",
    ],

    bracket: null,

    submissionInfo:
      "Players may submit builds on the respective discord channel until the mentioned submission date.",
  },
];