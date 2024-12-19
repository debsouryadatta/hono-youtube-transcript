import { Hono } from 'hono'
import { YoutubeTranscript } from "youtube-transcript";
import { getYoutubeClient, main } from './utils';

export type Env = {
  YOUTUBE_API_KEY: string;
  OAUTH_TOKEN: string;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/hono/youtube-transcript/:videoId', async (c) => {
  const { videoId } = c.req.param();
  const youtube_api_key = c.env.YOUTUBE_API_KEY;
  const youtubeClient = getYoutubeClient(youtube_api_key);
  const subtitles = await main(videoId, youtubeClient);
  return c.text(subtitles!);
})

export default app
