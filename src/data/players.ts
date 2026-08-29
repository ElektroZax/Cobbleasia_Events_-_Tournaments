export type Player = {
  id: string;
  username: string;
  crests: number;
  skinUrl?: string;
};

export const players: Player[] = [
  {
    id: "slaaaine",
    username: "Slaaaine",
    crests: 50,
  },

  {
    id: "king8281",
    username: "King8281",
    crests: 30,
  },

  {
    id: "thegreatjenish",
    username: "TheGreatJenish",
    crests: 15,
  },

  {
    id: "deathox",
    username: "Deathox",
    crests: 15,
  },
];