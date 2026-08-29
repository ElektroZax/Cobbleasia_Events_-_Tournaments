/*
============================================================
COBBLEASIA TOURNAMENT DATA FORMAT
============================================================

HOW TO ADD OR UPDATE A TOURNAMENT:

1. Add a new object inside the `tournaments` array.

2. REQUIRED FIELDS:

   id:
     Unique lowercase ID using hyphens.
     Example: "frostbound-cup"

   name:
     Full tournament name.
     Example: "The Frostbound Cup"

   status:
     Use ONLY:
       "upcoming"
       "completed"

   description:
     Full tournament description.

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

     DO NOT write:
       "1st — 1,000,000 Coins"

     Instead write:
       {
         place: 1,
         items: [
           "1,000,000 Coins",
         ],
       }

     The website automatically adds and styles
     "1st Place", "2nd Place", and "3rd Place".

   SPECIAL REWARDS:

     Special rewards that are not tied to a specific
     placement can be added using:

       {
         place: 0,
         items: [
           "Special reward description",
         ],
       }

     `place: 0` is reserved for special rewards and
     will NOT be treated as 1st, 2nd, or 3rd place.

     Example:

       {
         place: 0,
         items: [
           "SECRET REWARD — Top 3 trainers who use Solforge, Fusion, or Crynthian Line Pokémon throughout the tournament receive an exclusive reward.",
         ],
       }

3. OPTIONAL FIELDS:

   date:
     Format: "YYYY-MM-DD"

   time:
     Example: "8:30 PM GMT+8"

   format:
     Example: "National Dex OU"

   restriction:
     Team/Pokémon restrictions.

   bracket:
     Bracket URL when available.
     Otherwise:
       bracket: null

4. WHEN A TOURNAMENT IS FINISHED:

   Change:
     status: "upcoming"

   TO:
     status: "completed"

   Then add:
     winners: [
       {
         place: 1,
         username: "PlayerName",
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

   A tournament may have 1st, 2nd, and/or 3rd place.
   Only add the placements that actually exist.

5. TO UPDATE REWARDS:

   Edit ONLY the `items` array for the required placement.

   Example:
     {
       place: 1,
       items: [
         "2,500,000 Coins",
         "$30 USD",
         "1× Master IV Modifier",
       ],
     }

6. SECRET / SPECIAL REWARDS:

   Add special rewards using `place: 0`.

   Example:
     {
       place: 0,
       items: [
         "SECRET REWARD — Top 3 trainers who use Solforge, Fusion, or Crynthian Line Pokémon throughout the tournament receive an exclusive reward.",
       ],
     }

7. DO NOT change this data structure.
   The website components are built around this exact format.

============================================================
*/


export type PlacementReward = {
  place: number;
  items: string[];
};


export type TournamentWinner = {
  place: number;
  username: string;
  quote?: string;
};


export type Tournament = {
  id: string;
  name: string;

  status: "upcoming" | "completed";

  date?: string;
  time?: string;

  description: string;

  format?: string;
  restriction?: string;

  rewards: PlacementReward[];

  bracket?: string | null;

  winners?: TournamentWinner[];
};


export const tournaments: Tournament[] = [
  {
    id: "culinary-cup",

    name: "The Culinary Cup",

    status: "completed",

    date: "2026-08-28",

    time: "8:30 PM GMT+8",

    description:
      "A food-themed Pokémon tournament where trainers compete using Pokémon inspired by food, ingredients, dishes, plants, and other edible creations. Trainers competed using the approved Food Pokémon Pool under National Dex OU rules.",

    format: "National Dex OU",

    restriction:
      "Only Pokémon from the approved Food Pokémon Pool",

    rewards: [
      {
        place: 1,

        items: [
          "1,000,000 Coins",
          "1× Ranch Slot",
          "1× Shiny BP Pokémon from the approved list",
          "1× Master IV Modifier",
          "50× Event Crests",
        ],
      },

      {
        place: 2,

        items: [
          "750,000 Coins",
          "500 Tokens",
          "1× Perfect IV Modifier",
          "30× Event Crests",
        ],
      },
    ],

    bracket: "https://challonge.com/qgicw6m8",

    winners: [
      {
        place: 1,
        username: "Slaaaine",
        quote: "Sippin tea in your hood with your teabags",
      },

      {
        place: 2,
        username: "King8281",
      },
    ],
  },


  /*
  ==========================================================
  FINAL AUTHORITY — UBERS TOURNAMENT
  ==========================================================
  */

  {
    id: "final-authority-ubers",

    name: "Final Authority — Ubers Tournament",

    status: "upcoming",

    date: "2026-09-05",

    time: "8:30 PM GMT+8",

    description:
      "The ultimate National Dex Ubers tournament is coming. The most powerful trainers on the server will enter the battlefield, bringing legendary Pokémon, custom creations, terrifying strategies, and everything they've got.",

    format: "National Dex Ubers + Custom Pokémon",

    restriction:
      "All NatDex Ubers-legal Pokémon, Solforge Pokémon, Crynthian Line Pokémon, and Fusion Pokémon are allowed. Aurelion and Legendary Fusions are banned.",

    rewards: [
      {
        place: 1,

        items: [
          "2,500,000 Coins",
          "Higher Tier IV Boost ×1",
          "IV Boost ×3",
          "Shiny Legend Spin",
          "30× Event Crests",
        ],
      },

      {
        place: 2,

        items: [
          "1,500,000 Coins",
          "Legend Spin",
          "Higher Tier IV Boost ×1",
          "IV Boost ×2",
          "20× Event Crests",
        ],
      },

      {
        place: 3,

        items: [
          "950,000 Coins",
          "Paradox Core",
          "Higher Tier IV Boost ×1",
          "IV Boost ×1",
          "15× Event Crests",
        ],
      },

      {
        place: 0,

        items: [
          "SECRET REWARD — The Top 3 trainers who use Solforge, Fusion, or Crynthian Line Pokémon throughout the tournament will receive an exclusive Secret Reward. Earn your place in the Top 3 and find out.",
        ],
      },
    ],

    bracket: null,

    winners: [],
  },
];