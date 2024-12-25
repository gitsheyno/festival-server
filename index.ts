import express, { Request, Response } from "express";
import cors from "cors";
import { artistsData, festivalsData } from "./data";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/artist/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const artist = artistsData[id];

  try {
    if (!artist) {
      throw new Error("Artist not found.");
    }
    res.json(artist);
  } catch (err) {
    if (err instanceof Error) {
      res.json({ error: err.message });
    } else {
      res.json({ error: "An unknown error occurred." });
    }
  }
});

app.get("/getFestivalsByArtists", (req: Request, res: Response) => {
  const { artistIds } = req.body;

  if (!Array.isArray(artistIds) || artistIds.length === 0) {
    res.status(400).json({ error: "Please provide a list of artist IDs." });
  }

  const matchingFestivals = festivalsData.filter((festival) =>
    festival.Artists.some((artistId) => artistIds.includes(artistId))
  );

  try {
    if (matchingFestivals.length === 0) {
      throw new Error("No festivals found for the provided artists.");
    }
    res.json(matchingFestivals);
  } catch (err) {
    if (err instanceof Error) {
      res.json({ error: err.message });
    } else {
      res.json({ error: "An unknown error occurred." });
    }
  }
});

app.listen(PORT, () => {
  console.log(`hello on http://localhost:${PORT}`);
});
