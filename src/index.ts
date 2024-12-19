// import { Hono } from 'hono'
// import { YoutubeTranscript } from "youtube-transcript";

// export type Env = {
//   YOUTUBE_API_KEY: string;
//   OAUTH_TOKEN: string;
// };

// const app = new Hono<{ Bindings: Env }>();

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

// app.get('/hono/youtube-transcript/:videoId', async (c) => {
//   const { videoId } = c.req.param();
//   // return c.text(await getTranscript(videoId));
//   return c.json({
//     videoId,
//     transcript: await getTranscript(videoId),
//   })
// })

// // const getTranscript = async (videoId: string, apiKey: string, oauthToken: string) => {
// //   try {
// //     // Step 1: Get caption tracks
// //     const captionsResponse = await fetch(
// //       `https://www.googleapis.com/youtube/v3/captions?videoId=${videoId}&part=snippet&key=${apiKey}`
// //     );
    
// //     const captions = await captionsResponse.json();
// //     const captionId = captions.items[0]?.id;
    
// //     if (!captionId) {
// //       throw new Error('No captions available');
// //     }

// //     // Step 2: Get the actual transcript
// //     const transcriptResponse = await fetch(
// //       `https://www.googleapis.com/youtube/v3/captions/${captionId}?key=${apiKey}`,
// //       {
// //         headers: {
// //           Authorization: `Bearer ${oauthToken}`,
// //           Accept: 'application/json'
// //         }
// //       }
// //     );

// //     const transcript = await transcriptResponse.json();
// //     return transcript;
// //   } catch (error) {
// //     throw new Error(`Failed to fetch transcript: ${error.message}`);
// //   }
// // }

// export async function getTranscript(videoId: string) {
//   try {
//     let transcript_arr = await YoutubeTranscript.fetchTranscript(videoId, {
//       // lang: "en",
//       //   @ts-ignore
//       // country: "EN",
//     });
//     let transcript = "";
//     for (let t of transcript_arr) {
//       transcript += t.text + " ";
//     }
//     return transcript.replaceAll("\n", "");
//   } catch (error) {
//     return "";
//   }
// }

// export default app
