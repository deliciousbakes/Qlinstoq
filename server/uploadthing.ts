/** @format */

// server/uploadthing.ts
import { UTApi } from "uploadthing/server";

export const utapi = new UTApi({
  apiKey: process.env.UPLOADTHING_SECRET, // YOUR UPLOADTHING_SECRET
});
