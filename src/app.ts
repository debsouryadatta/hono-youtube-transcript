import express from "express";
import cors from "cors";
import { YoutubeTranscript } from "youtube-transcript";
import { main } from "./utils.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/hono/youtube-transcript/:videoId", async (req, res) => {
  const { videoId } = req.params;
  try {
    // const transcript = await getTranscript(videoId);
    const transcript = await main(videoId);
    res.json({
      videoId,
      transcript: transcript,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transcript" });
  }
});

export async function getTranscript(videoId: string) {
  try {
    let transcript_arr = await YoutubeTranscript.fetchTranscript(videoId, {
      // lang: "en",
      //   @ts-ignore
      // country: "EN",
    });
    let transcript = "";
    for (let t of transcript_arr) {
      transcript += t.text + " ";
    }
    // @ts-ignore
    return transcript.replaceAll("\n", "");
  } catch (error) {
    return "";
  }
}

app.listen(8787, () => {
  console.log("Server running on port 8787");
});
