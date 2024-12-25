interface Artist {
  artist: string;
  Songs: {
    title: string;
    length: number;
    colab?: string;
  }[];
}

export const artistsData: Record<string, Artist> = {
  "65102": {
    artist: "Afrojack",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "66114": {
    artist: "Bring Me The Horizon",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "69108": {
    artist: "Electric Callboy",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "70105": {
    artist: "FiNCH",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "71114": {
    artist: "Greeen",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "71117": {
    artist: "Guns N' Roses",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "73114": {
    artist: "Iron Maiden",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "75467": {
    artist: "K.I.Z",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "77979": {
    artist: "Macklemore",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "80971": {
    artist: "Papa Roach",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
        colab: "Steve Aoki",
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "82105": {
    artist: "Rin",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
        colab: "Steve Aoki",
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "83105": {
    artist: "Sido",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
        colab: "Steve Aoki",
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "83108": {
    artist: "Slipknot",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
        colab: "Steve Aoki",
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
  "83979": {
    artist: "Saberton",
    Songs: [
      {
        title: "No Beef",
        length: 334000,
        colab: "Steve Aoki",
      },
      {
        title: "The Spark",
        length: 244000,
        colab: "Steve Aoki",
      },
      {
        title: "Dirty Sexy Money",
        length: 174000,
        colab: "David Guetta",
      },
    ],
  },
};

export const festivalsData = [
  {
    name: "Summerjam",
    branding: {
      mainColor: "#c32a39",
      secondaryColor: "#e76234",
    },
    Artists: [65102, 83105, 71114, 75467, 82105],
    url: "https://summerjam.de/de/",
  },
  {
    name: "SanHejmo",
    branding: {
      mainColor: "#b8b8d0",
      secondaryColor: "#fdc04f",
    },
    Artists: [83105, 71114, 77979, 82105, 70105],
    url: "https://www.sanhejmo.com/",
  },
  {
    name: "RockAmRing",
    branding: {
      mainColor: "#01013a",
      secondaryColor: "#f0f39d",
    },
    Artists: [66114, 83108, 71117, 69108, 73114],
    url: "https://www.rock-am-ring.com/",
  },
  {
    name: "Wacken",
    branding: {
      mainColor: "#010101",
      secondaryColor: "#9bb497",
    },
    Artists: [71117, 80971, 73114, 83979, 70105],
    url: "https://www.wacken.com/de/",
  },
  {
    name: "RockImPark",
    branding: {
      mainColor: "#01013a",
      secondaryColor: "#f0f39d",
    },
    Artists: [66114, 80971, 83105, 83979, 75467],
    url: "https://www.rock-im-park.com/",
  },
];
